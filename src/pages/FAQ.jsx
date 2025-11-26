import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  padding: 60px 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
`;

const Question = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
`;

const Answer = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 30px;
`;

function FAQ() {
  return (
    <FAQContainer>
      <Title>Frequently Asked Questions</Title>

      <Question>What services do you offer?</Question>
      <Answer>
        We offer a wide range of IT services, including software development, cloud solutions, network security, and IT consulting.
      </Answer>

      <Question>How can I contact you?</Question>
      <Answer>
        You can contact us through the contact form on our website or by emailing us at info@innovatech.com.
      </Answer>

      <Question>Do you offer custom software development?</Question>
      <Answer>
        Yes, we specialize in custom software development tailored to your specific business needs.
      </Answer>
    </FAQContainer>
  );
}

export default FAQ;