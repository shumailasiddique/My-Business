import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import ImageViewer from '../components/ImageViewer';

const SignInLayout: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <StyledPage $isMobile={isMobile}>
      <div id="left">
        <ImageViewer src="/../../public/green-trees.png" alt="My Business Signin" />
      </div>
      <div id="right">
        {/* Other Sign In Components (form, etc.) */}
      </div>
    </StyledPage>
  );
};

const StyledPage = styled.div<{ $isMobile: boolean }>`
  height: 100%;
  padding: 36px;
  display: flex;
  flex-direction: column;

  #left {
    display: none;
  }

  #right {
    max-width: ${(props) => (props.$isMobile ? '100%' : '700px')};
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    height: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;

    #left {
      display: block;
      width: 30%;
    }

    #right {
      width: 70%;
      padding-left: 50px;
      padding-right: 50px;
      align-items: flex-start;
      text-align: left;
      justify-content: center;
    }
  }
`;

export default SignInLayout;
