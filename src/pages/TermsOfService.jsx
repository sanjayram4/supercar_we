import React from 'react';
import styled from 'styled-components';

const TermsOfServiceContainer = styled.div`
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

function TermsOfService() {
  return (
    <TermsOfServiceContainer>
      <Title>Terms of Service</Title>

      <SectionTitle>Acceptance of Terms</SectionTitle>
      <Content>
        By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms,
        please do not use our website.
      </Content>

      <SectionTitle>Use of Website</SectionTitle>
      <Content>
        You may use our website for lawful purposes only. You may not use our website to transmit any harmful, offensive, or illegal
        content.
      </Content>

      <SectionTitle>Intellectual Property</SectionTitle>
      <Content>
        The content on our website, including text, graphics, logos, and images, is protected by copyright and other intellectual
        property laws. You may not use our content without our permission.
      </Content>
    </TermsOfServiceContainer>
  );
}

export default TermsOfService;