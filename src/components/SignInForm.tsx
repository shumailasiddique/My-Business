import React from 'react';
import styled from 'styled-components';
import PasswordImage from '../assets/Vector.svg';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #9FA8B6;
  margin-bottom: 0.5rem;
  display: block;
  letter-spacing: -0.03em;
  position: relative;
  z-index: 1;
  font-weight: 500;
  opacity: 1;
  text-transform: capitalize;
`;

const InputField = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  border: 2px solid #373D48;
  border-radius: 4px;
  background-color: #2E343D;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #ADDE34;
  }

  &::placeholder {
    color: #9FA8B6;
  }
`;

const PasswordIcon = styled.img`
  position: absolute;
  right: 1rem;
  top: 60%;
  transform: translateY(-50%);
  width: 17px;
  height: 8px;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  font-size: 13px;
  color: #C73232;
  margin-top: 0.5rem;
  display: block;
  font-style: italic;
  letter-spacing: -0.03em;
`;

const SignInButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #2E343D;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  letter-spacing: -0.03em;

  &:hover {
    background-color: #373D48;
  }
`;

const SignInForm = () => {
  return (
    <FormContainer>
      <InputWrapper>
        <Label>Email:</Label>
        <InputField type="email" placeholder="Enter your email" />
      </InputWrapper>

      <InputWrapper>
        <Label>Password:</Label>
        <InputField type="password" placeholder="Enter your password" />
        <PasswordIcon src={PasswordImage} alt="toggle password" />
        <ErrorMessage>Error Text</ErrorMessage>
      </InputWrapper>

      <SignInButton>Sign In</SignInButton>
    </FormContainer>
  );
};

export default SignInForm;

