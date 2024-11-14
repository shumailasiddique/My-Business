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
  display: flex;
  justify-content: space-between;
  height: 100vh;
  
  #left {
    width: 50%;
  }

  #right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    #left {
      display: none;
    }

    #right {
      width: 100%;
      padding: 20px;
    }
  }

  @media (max-width: 480px) {
    #right {
      padding: 15px;
      input, button {
        width: 90%;
        max-width: 382px;
        height: 55px; /* Updated height based on Figma */
        font-size: 1rem;
        padding: 12px 16px;
        margin-bottom: 15px;
        border-radius: 8px;
      }
    }
  }
`;


export default SignInLayout;