import React from 'react';
import { HeaderWrapper, Logo, Title } from '../styles/HeaderStyles';

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Logo src="/path/to/logo.png" alt="Logo" />
      <Title>Welcome Back!</Title>
    </HeaderWrapper>
  );
};

export default Header;
