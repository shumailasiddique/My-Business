
import React from 'react';
import styled from 'styled-components';
import SignInLayout from '../layouts/SignInLayout';
import ImageViewer from '../components/ImageViewer';
import LogoSwitcher from '../components/LogoSwitcher';
import Quotescroller from '../components/QuoteScroller';
import SignInForm from '../components/SignInForm';
import TextInput1 from '../components/TextInput1';
import TextInput from '../components/TextInput';


// Styled Components for Layout
const LeftContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;  // Hide the image on mobile view
  }
`;

const RightContainer = styled.div`width: 50%;
  position: relative;
  height: 667px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  box-sizing: border-box;
  text-align: left;
  font-size: 16px;
  color: #fff;
  font-family: Inter;
   @media (max-width: 768px){
   width:100%;
   }
  `;

const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #388E3C; // Forest Green for heading
  margin-bottom: 20px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  color: #757575; // Grey color for subheading text
  margin-bottom: 40px;
`;

const SignIn = () => {
  return (
    <SignInLayout>
      <LeftContainer>
        <ImageViewer src="/../../public/green-trees.jpg" alt="Sign In Visual" />
      </LeftContainer>
      <RightContainer>
      <LogoSwitcher></LogoSwitcher>
      <Quotescroller />
      <TextInput1 />
          
      </RightContainer>
    </SignInLayout>
  );
};

export default SignIn;
