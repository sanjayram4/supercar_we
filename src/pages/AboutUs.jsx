import React from 'react';
import styled from 'styled-components';

const AboutUsContainer = styled.div`
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 40px;
`;

const TeamSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const TeamMember = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const TeamImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const TeamRole = styled.p`
  color: #666;
`;

function AboutUs() {
  return (
    <AboutUsContainer>
      <Title>About Us</Title>
      <Content>
        Innovatech Solutions is a leading IT company dedicated to providing innovative and reliable technology solutions.
        We specialize in software development, cloud services, network security, and more. Our mission is to help businesses
        succeed in the digital age by leveraging the power of technology.
      </Content>

      <TeamSection>
        <TeamMember>
          <TeamImage src="https://images.unsplash.com/photo-1573496807863-b04f83308b7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="John Doe" />
          <TeamName>John Doe</TeamName>
          <TeamRole>CEO</TeamRole>
        </TeamMember>
        <TeamMember>
          <TeamImage src="https://images.unsplash.com/photo-1560250097-0b9358e40af4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW0lMjBtZW1iZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="Jane Smith" />
          <TeamName>Jane Smith</TeamName>
          <TeamRole>CTO</TeamRole>
        </TeamMember>
        <TeamMember>
          <TeamImage src="https://images.unsplash.com/photo-1580835414545-ca5e2c68a989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYW0lMjBtZW1iZXJ8ZW58MHx8MHx8&w=1000&q=80" alt="Mike Johnson" />
          <TeamName>Mike Johnson</TeamName>
          <TeamRole>Lead Developer</TeamRole>
        </TeamMember>
      </TeamSection>
    </AboutUsContainer>
  );
}

export default AboutUs;