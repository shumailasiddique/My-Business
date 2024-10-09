import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 177px;
  position: relative;
  height: 73px;
`;

const Logo = styled.img`
 
`;

const BusinessName = styled.h1`
  font-size: 28px;  // Adjusted as per design
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;
const Subtitle = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  font-size: var(--italicquote-size);
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`;
const SubtitleText =styled.i`
  position: absolute;
  width: 100%;
  top: calc(50% - 35.5px);
  left: 0;
  letter-spacing: -0.03em;
  line-height: 36px;
  display: inline-block;
  font-weight: 300;

`;

const SignInTitle: React.FC = () => {
  return (
    <>
    
    
  </>
  );
};

export default SignInTitle;
