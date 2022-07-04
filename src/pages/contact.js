import React, { useState } from "react";
import Layout from "../components/layout";
import { navigate } from 'gatsby';
import Seo from "../components/seo";
import styled from 'styled-components';
// import axios from 'axios';

import * as Icon from '@easy-eva-icons/react';

{/*
const StyledForm = styled.div`
max-width:100%;
height: auto;
display: flex;
justify-content:center;
align-items:center;
position: relative;
padding:0 1.618rem;
@media(max-width:1024px) {
    padding:1rem;
}
form {
margin: 14rem 0 7rem 0;
position: relative;
display: flex; 
flex-direction: row;
justify-content:space-around;
align-items:center;
height: auto;
width:70%;
border-radius:0.4rem;
border:1px solid #908299;
padding:0.5rem;
@media(max-width:1024px) {
    margin:6rem 0 6rem 0;
    width:100%;
    flex-direction: column;
    height:auto;
}

#left,#right {
    display: flex;
    width:50%;
    flex-direction: column;
    position: relative;
    height:auto;
    padding: 2rem 4rem;
    @media(max-width:1024px){
        width:100%;
    }





 input {
    margin: 1.6rem auto;
    width:100%;
    height:40px;
    padding: 16px;
    border-radius:0.2rem;
    border: 0.1rem solid #908299;
    font-weight:700;
    font-size: 0.87rem;
    letter-spacing:0.06rem;
    &:focus {
        background: #908299;
        color: #fff;
    }
    @media(max-width:1024px) {
        margin: 0.5rem 0;
    }
}

#textarea {
    width:100%;
    height: 300px;
    padding:0px 16px;
    margin:2.2rem 0 0.5rem 0;
    border-radius:0.2rem;
    border: 0.1rem solid #908299;
    font-weight:700;
    font-size: 0.87rem;
    letter-spacing:0.06rem;
    position: relative;
    &:focus {
        background: #908299;
        color: #fff;
    }
    @media(max-width:1024px) {
        margin: 0.5rem 0;
    }
}
button {
    max-width: 100%;
    height:60px;
    margin: 2.2rem 0;
    font-weight:600;
    padding:25px 0 -5px 0;
    border-radius:0.2rem;
    background: #3e1955;
    color: #fff;
    border-radius:0.23rem;
    text-decoration: none;
    font-weight:600;
    border:none;
    border-bottom: 0.22rem solid #9E50CE;
    cursor: pointer;
    position: relative;
    &:hover {
        background: #4B1E66;
        transition: background 0.2s ease-in;
      }
}
}
}
`

*/}





const StyledForm = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  height: 100%;
  max-width:100%;
  position: relative;
  margin-top:6rem;

  .flex-row {
      display: flex;
      flex-direction: row;
      max-width:90%;
      align-items: space-around;
      @media(max-width:1024px) {
          flex-direction: column;
          width:100%;
      }
  }
   form {
       display: flex;
       flex-direction: column;
       justify-content:center;
       align-items: space-around;
       padding:3rem;
       width:50%;
       height: auto;
       @media(max-width:1024px) {
           width: 90%;
       }
       button {
        max-width: 90%;
        height: 46px;
        margin: 40px 0;
        position: relative;
        background: #3e1955;
        color:#fff;
        border-radius: 6px;
        border: none;
        font-weight:700;
        cursor: pointer;
        &:hover {
            background: #703B91;

        }
    }
   }
`

const StyledFormInput = styled.div`
 display: flex;
 flex-direction: column;
 justify-content:center;
 
 margin: 0 auto;
 padding:0.5rem;
 width:100%;
 position: relative;

 .title {
     font-weight:700;
     font-size: 1rem;
 }
 input {
     height:46px;
     max-width: 80%;
     padding: 0 40px;
     border-radius:6px;
     font-weight:600;
     border: 0.2rem solid #3e1955;
     &:focus {
         background: #908299;
         color: #fff;
     }
 }
 
 .textarea {
     height: 120px;
 }


 .icon {
     position: absolute;
     top: 50px;
     left: 24px;
     svg {
     fill: #3e1955;
     }
 }
`

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const Contact = () => {

    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }
    return (
        <Layout>
            <Seo title="Contact" keywords="studio d'enregistrement, saint-jerome, musique studio, instrumentals " />
    
  
            <StyledForm>
                <form
                    className="form"
                    name="contact"
                    method="post"
                    action="/thanks"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>
                            Don't fill this out: <input name="bot-field" onChange={handleChange} />
                        </label>
                    </p>
  
                        <StyledFormInput>
                            <span className="title"> COURRIEL </span>
                            <input type="email" name="email" onChange={handleChange} />
                            <span className='icon'><Icon.Email style={{fill: "#3E1955"}} /></span>
                        </StyledFormInput>


                        <StyledFormInput>
                            <span className="title"> NOM </span>
                            <input
                                name="nom"
                                type="text"
                   
                                onChange={handleChange}
                            />
                       <span className='icon'><Icon.SmilingFace /></span>
                        </StyledFormInput>
                        <StyledFormInput>
                            <span className="title"> MOBILE </span>
                            <input
                                name="mobile"
                                type="mobile"
                                onChange={handleChange}
                            />
                                   <span className='icon'><Icon.Phone /></span>
                        </StyledFormInput>
                 

                        <StyledFormInput>
                            <span className="title"> MESSAGE </span>
                            <input className="textarea" name="message" onChange={handleChange}  />
                            <span className='icon'><Icon.Edit2 /></span>
                        </StyledFormInput>
                        <div className='flex-row'>
                        <StyledFormInput>
                            <span className="title"> DATE</span>
                            <input
                             type="date"
                             name="date"
                             onChange={handleChange}
                            />
                        </StyledFormInput>
                        
                        <StyledFormInput>
                            <span className="title"> HEURE </span>
                            <input
                             type="text"
                             name="date-time"
                             onChange={handleChange}
                            />
                         <span className="icon"><Icon.Clock /></span>
                        </StyledFormInput>
                        </div>
                        <button type="submit">
                            ENVOYER
                        </button>
                </form>
            </StyledForm>
      
        </Layout>
    )
}

export default Contact