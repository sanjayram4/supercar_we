import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  li a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>Innovatech Solutions</Logo>
      <NavLinks>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/terms-of-service">Terms of Service</Link></li>
         <li><Link to="/disclaimer">Disclaimer</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;