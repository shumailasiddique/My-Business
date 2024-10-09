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


const StyledPage = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  
  #left {
    width: 50%; /* Left section 50% */
  }

  #right {
    width: 50%; /* Right section 50% */
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
    }
  }
`;


export default SignInLayout;
