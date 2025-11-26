import React from 'react';
import styled from 'styled-components';

const DisclaimerContainer = styled.div`
  padding: 60px 20px;
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
  margin-bottom: 30px;
`;

function Disclaimer() {
  return (
    <DisclaimerContainer>
      <Title>Disclaimer</Title>
      <Content>
        The information provided on this website is for general informational purposes only. We make no representations or warranties
        of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect
        to the website or the information, products, services, or related graphics contained on the website for any purpose.
      </Content>
      <Content>
        Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss
        or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising
        from loss of data or profits arising out of, or in connection with, the use of this website.
      </Content>
    </DisclaimerContainer>
  );
}

export default Disclaimer;