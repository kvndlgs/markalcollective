import React, { useState } from "react";
import Layout from "../components/layout";
import { navigate } from 'gatsby';
import Seo from "../components/seo";
import styled from 'styled-components';
// import axios from 'axios';

import * as Icon from '@easy-eva-icons/react';



const StyledForm = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  height: auto;
  width:100%;
  position: relative;
  margin:8rem 0 4rem 0;
  .flex-row {
      display: flex;
      flex-direction: row;
      width:100%;
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
       padding:1rem;
       width:60%;
       height: auto;
       @media(max-width:1024px) {
           width: 100%;
       }
       button {
        width: 100%;
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

 padding:0.5rem;
 width:100%;
 position: relative;

 .title {
     font-weight:700;
     font-size: 1rem;
 }
 input {
     height:46px;
     width:100%;
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
     top: 44px;
     left: 24px;
     svg {
     fill: #3e1955;
     }
 }
 
 .error {
  border: 0.2rem solid "red"
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