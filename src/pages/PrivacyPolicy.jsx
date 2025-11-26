import React from 'react';
import styled from 'styled-components';

const PrivacyPolicyContainer = styled.div`
  padding: 60px 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #333;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;
`;

function PrivacyPolicy() {
  return (
    <PrivacyPolicyContainer>
      <Title>Privacy Policy</Title>

      <SectionTitle>Information We Collect</SectionTitle>
      <Content>
        We collect personal information such as your name, email address, and contact details when you fill out forms on our website
        or contact us directly. We also collect non-personal information such as your IP address, browser type, and operating system
        for analytical purposes.
      </Content>

      <SectionTitle>How We Use Your Information</SectionTitle>
      <Content>
        We use your personal information to respond to your inquiries, provide you with the services you request, and send you
        updates and promotional materials. We use non-personal information to improve our website and services.
      </Content>

      <SectionTitle>Data Security</SectionTitle>
      <Content>
        We take the security of your data seriously and implement appropriate measures to protect it from unauthorized access,
        disclosure, or alteration.
      </Content>
    </PrivacyPolicyContainer>
  );
}

export default PrivacyPolicy;