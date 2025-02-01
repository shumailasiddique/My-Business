import styled from 'styled-components';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface SignInLayoutProps {
  children: React.ReactNode;
}

interface StyledPageProps {
  $isMobile: boolean;
}

const StyledPage = styled.div<StyledPageProps>`
  display: flex;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SignInLayout: React.FC<SignInLayoutProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return <StyledPage $isMobile={isMobile}>{children}</StyledPage>;
};

export default SignInLayout;
