import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
// import { theme } from '../theme';



const MenuLink = styled(Link)`
  padding:2rem;
  margin: 0 2rem;
  cursor: pointer;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 0.74rem;
  letter-spacing:0.1rem;
  font-weight: 600;
  z-index:999;
  &:hover {
    color: #9855c2;
  }
  @media(max-width:1024px) {
    width:100%;
    margin-bottom: 2rem;
    padding: 0.4rem;
    font-size: 1.4rem;
    line-height:2rem;
  }
`;

const Nav = styled.div`
  align-self: center;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: absolute;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
`;


const Menu = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  max-width:88%:
  margin:0 auto;
  @media (max-width: 1024px) {
    text-align:center;
    max-width:100vw;
    height:100vh;
    position: absolute;
    align-items:center;
    justify-content: center;
    top:${({isOpen}) => (isOpen ? "0" : "-30rem")};
    left:0;
    bottom:0;
    right:0;
    padding:0.5rem 0;
    background: #3e1955;
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "100vh" : "0")};
    transition: all 0.6s cubic-bezier(0.5,0.2,0.5,0.8);
  }
`;

const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;
z-index:999999;
padding: 1rem;
position: absolute;
left: 1.2rem;
top:1.2rem;
&:hover span {
  background: #fff;
}
span {
  transition: all 0.3s ease-in;
}
  #s1  {

     transform: rotate(45deg);
     margin-bottom:7.5px;
  }
  #s2 {
    display: none;
  }

  #s3 {
    transform: rotate(-45deg);
    margin-top:-10px;
  }

  span {
    height: 3px;
    width: 30px;
    background: #fff;
    margin-bottom: 5px;
    border-radius: 12px;
  }
  @media (max-width: 1024px) {
    display: flex;
  }
`;




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav role="navigation" style={{zIndex:'9999'}}>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span id={ isOpen ? "s1" : ""}/>
        <span id={ isOpen ? "s2" : ""}/>
        <span id={ isOpen ? "s3" : ""} />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/services">SERVICES</MenuLink>
        <MenuLink href="/beats"> BEATS </MenuLink>
        <MenuLink href='#'> STUDIO </MenuLink>
        <MenuLink href="/medias">MEDIAS</MenuLink>
        <MenuLink href="/events" > ÉVÈNEMENTS </MenuLink>
        <MenuLink href="/contact">CONTACT</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Header;

