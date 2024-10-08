import styled from 'styled-components';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface SignInLayoutProps {
  children: React.ReactNode;
}

interface StyledPageProps {
  $isMobile: boolean;
}

const SignInLayout: React.FC<SignInLayoutProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return <StyledPage $isMobile={isMobile}>{children}</StyledPage>;
};

const StyledPage = styled.div<StyledPageProps>`
  height: 100vh;
  display: flex;
  justify-content: center;  // Center vertically
  align-items: center;  // Center horizontally
  flex-direction: column;

  #left {
    display: none;
  }

  #right {
    background-color: ${({ theme }) => theme.colors.background};
    max-width: 400px; // Adjust as per design
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;

    #left {
      display: block;
      width: 50%;  // Ensure the image takes 50% of the space
    }

    #right {
      width: 50%;
      padding-left: 50px;
      padding-right: 50px;
      align-items: flex-start;
      text-align: left;
      justify-content: center;
    }
  }
`;

export default SignInLayout;
