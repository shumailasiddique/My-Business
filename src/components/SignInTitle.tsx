import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  width: 170px;
  height: 73px;
  margin-right: 10px;
`;

const BusinessName = styled.h1`
  font-size: 28px;  // Adjusted as per design
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;
const Subtitle = styled.p`
  font-size: 22px; // Adjust font size for the quote
  font-style: italic; // Italics to match design
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey500}; // Secondary text color
  margin-bottom: 40px;  // Adjust spacing to match design
  text-align: left; // Align to the left for consistency with the design
`;


const SignInTitle: React.FC = () => {
  return (
    <>
    <LogoContainer>
      <Logo src="/../../public/Logo.svg" alt="Business Logo" />
      
    </LogoContainer>
    <Subtitle>
      "Success is not just about making a sale; it's about building a relationship that lasts."
    </Subtitle>
  </>
  );
};

export default SignInTitle;
