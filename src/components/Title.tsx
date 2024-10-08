import React from 'react';
import { TitleWrapper, MainTitle, Subtitle } from '../styles/TitleStyles';

const Title: React.FC = () => {
  return (
    <TitleWrapper>
      <MainTitle>Sign In</MainTitle>
      <Subtitle>Enter your credentials to access your account</Subtitle>
    </TitleWrapper>
  );
};

export default Title;
