import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #007bff, #00bfff);
  color: #fff;
  padding: 100px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background-color: #fff;
  color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ServicesSection = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #333;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const ServiceIcon = styled.i`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 15px;
`;

const ServiceName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const ServiceDescription = styled.p`
  color: #666;
`;

function Home() {
  return (
    <>
      <HeroSection>
        <HeroTitle>Welcome to Innovatech Solutions</HeroTitle>
        <HeroSubtitle>Your partner in innovative technology solutions</HeroSubtitle>
        <Button href="/contact-us">Get Started</Button>
      </HeroSection>

      <ServicesSection>
        <ServicesTitle>Our Services</ServicesTitle>
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon className="fas fa-code"></ServiceIcon>
            <ServiceName>Software Development</ServiceName>
            <ServiceDescription>Custom software solutions tailored to your business needs.</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon className="fas fa-cloud"></ServiceIcon>
            <ServiceName>Cloud Solutions</ServiceName>
            <ServiceDescription>Migrate to the cloud and optimize your infrastructure for scalability and efficiency.</ServiceDescription>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon className="fas fa-network-wired"></ServiceIcon>
            <ServiceName>Network Security</ServiceName>
            <ServiceDescription>Protect your data and infrastructure with our comprehensive network security solutions.</ServiceDescription>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>
    </>
  );
}

export default Home;