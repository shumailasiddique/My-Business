import styled from 'styled-components';

const LogoContainer = styled.div`
  width: 177px;
  position: relative;
  height: 73px;
  margin-top: 160px;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const SuccessQuote = styled.i`
  margin: 30px 0;
  display: block;
  letter-spacing: -0.03em;
  line-height: 36px;
  font-style: italic;
  font-weight: 300;
  color: #9fa8b6;
  font-size: 25px;
  text-align: left;
  max-width: 100%;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-top: 50px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: var(--tight);
  border: 2px solid #9fa8b6; /* Default border color */
  background-color: #2e343d; /* Adjust to match design */
  font-size: 16px;
  color: #ffffff;
  outline: none;

  &:focus {
    border-color: #adde34; /* Active border color as per design */
  }

  &::placeholder {
    color: #9fa8b6; /* Placeholder color */
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FormButton = styled.button`
  width: 48%;
  padding: 15px;
  background-color: ${({ disabled }) => (disabled ? '#d3d3d3' : '#303030')};
  border-radius: var(--tight);
  border: none;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

const ClearButton = styled.button`
  width: 48%;
  padding: 15px;
  background-color: #666666;
  border-radius: var(--tight);
  border: none;
  font-size: 18px;
  color: white;
  cursor: pointer;
`;

const SignInFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 450px;
  margin: 0 auto;
`;

const Label = styled.label`
  font-size: 16px;
  color: #9fa8b6;
  font-family: var(--regular);
  display: block;
  margin-bottom: 8px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 16px;
`;

const SignInForm: React.FC = () => {
  const isError = false; // Add logic to handle error state

  return (
    <SignInFormWrapper>
      <LogoContainer>
        <Logo src="/public/Logo.svg" alt="Business Logo" />
      </LogoContainer>

      <SuccessQuote>
        "Success is not just about making a sale; it's about building a relationship that lasts."
      </SuccessQuote>

      <FormContainer>
        <Label>Email Address</Label>
        <InputField type="email" placeholder="Email Address" />
        {isError && <ErrorText>Email is required</ErrorText>}

        <Label>Password</Label>
        <InputField type="password" placeholder="Password" />
        <ErrorText>Error!</ErrorText>

        <ButtonContainer>
          <FormButton disabled={isError}>Sign In</FormButton>
          <ClearButton>Clear</ClearButton>
        </ButtonContainer>
      </FormContainer>
    </SignInFormWrapper>
  );
};

export default SignInForm;
