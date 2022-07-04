import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 20px;
height: auto;
min-height: 400px;
text-align:center;
width: 80%;
margin: 30px;
border: 2px solid #9e8cca;
border-radius:14px;
image {
    width:80px;
    z-index:999;
}

h3 {
    color: #9e8cca;
}
a {
    color: #fff;
    background: #9e8cca;
    padding: 14px 20px;
    font-weight:700;
    border-radius: 4px;
    text-decoration: none;
    &:hover {
        background: #3e1955;
    }
}
`

const Card = ({title, desc, icon, buttonText, href}) => {
    return (
        <Wrapper>
             <img style={{width: '100px'}} src={icon} alt={title} />
            <h3>
                { title }
            </h3>
            <a href={href}>
                { buttonText }
            </a>
        </Wrapper>        
    )
}

export default Card;