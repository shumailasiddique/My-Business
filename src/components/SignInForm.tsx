import React from 'react';
import styled from 'styled-components';
import PasswordImage from '../assets/Vector.svg';

// Form container with centralized alignment and proper spacing
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10%;
  width: 100%;
  max-width: 428px;
  padding: 0 8px;

  @media (max-width: 768px) {
    margin-top: 15%;
    align-items: center;
    max-width: 80%;
    padding: 0 10px; /* Adjusted padding for mobile view */
  }
`;

// Inner container for aligning label, input, and error text
const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 15px;
  position: relative;
`;

// Label styling for the input fields
const Label = styled.label`
  font-size: 14px;
  color: #cccccc;
  margin-bottom: 8px;
  display: block;
`;

// Input fields with updated styling based on Figma design
const InputField = styled.input`
  width: 100%;
  padding: 12px; /* Adjusted padding */
  border: 1px solid #333333;
  border-radius: 6px;
  background-color: #262A32;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  height: 22px; /* Updated height to match Figma design */


  &:focus {
    border-color: #6c8737;
  }

  @media (max-width: 480px) {
    height: 40px; /* Adjusted height for mobile */
  }
`;

// Password icon styling
const PasswordIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;

  @media (max-width: 768px) {
    right: 15px;
  }

  @media (max-width: 480px) {
    right: 10px;
    height: 20px;
  }
`;

// Error message styling
const ErrorMessage = styled.p`
  font-size: 12px;
  color: #ff4d4d;
  margin: 5px 0;
  text-align: left;
`;

// Horizontal line to separate the input fields and buttons
const Divider = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid #cccccc;
  margin: 20px 0;
`;

// Updated Submit button styling based on Figma design
const SubmitButton = styled.button`
  background-color: #2e343d;  /* Figma button background color */
  color: #ffffff;
  border: none;
  padding: 14px 0;
  width: 48%;  /* Ensures buttons are side by side */
  cursor: pointer;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
  height:42px;

  &:hover {
    background-color: #00aa33;  /* Darker shade on hover */
  }

  @media (max-width: 768px) {
    width: 100%; /* Ensures full-width button for mobile view */
  }
`;

// Clear button styling
const ClearButton = styled.button`
  background-color: #262A32;
  color: #ffffff;
  border: none;
  padding: 14px 0;
  width: 48%;  /* Ensures buttons are side by side */
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
   height:42px;

  &:hover {
    background-color: #2e343d;
    color: #fff;
  }

  @media (max-width: 768px) {
    display:none;
  }
`;

// Button container for aligning buttons horizontally
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Main SignInForm component
const SignInForm = () => {
  return (
    <FormContainer>
      <InputWrapper>
        <Label htmlFor="email">Email</Label>
        <InputField type="email" id="email" />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor="password">Password</Label>
        <InputField type="password" id="password" />
        <PasswordIcon src={PasswordImage} alt="password icon" />
        <ErrorMessage>Error!</ErrorMessage>
      </InputWrapper>

      {/* Adding the divider between input fields and buttons */}
      <Divider />

      <ButtonContainer>
        <SubmitButton>Sign In</SubmitButton>
        <ClearButton>Clear</ClearButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default SignInForm;
