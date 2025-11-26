import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  font-size: 1.5rem;
  margin-bottom: 20px;

  a {
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <SocialIcons>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      </SocialIcons>
      <FooterLinks>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/faq">FAQ</Link>
      </FooterLinks>
      <p>&copy; {new Date().getFullYear()} Innovatech Solutions. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;