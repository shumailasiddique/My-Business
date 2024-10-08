import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 20px; // Separate each field and add space for the error text
`;

const Input = styled.input<{ isError?: boolean }>`
  padding: 15px;
  border: 2px solid
    ${({ isError, theme }) => (isError ? theme.colors.error : theme.colors.primary)};
  border-radius: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundInput};
  box-sizing: border-box;
  margin-bottom: 10px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.focus}; // Adjusted for focus state
  }
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 12px;
  margin-top: 5px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledButton};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const ClearButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.clearButton};
  color: #333;

  &:hover {
    background-color: ${({ theme }) => theme.colors.clearButtonHover};
  }
`;

const SignInForm: React.FC = () => {
  const isError = false; // Add logic to handle error state

  return (
    <form>
      <InputContainer>
        <Input type="email" placeholder="Email Address" />
        {isError && <ErrorText>Error Text</ErrorText>}
      </InputContainer>
      <InputContainer>
        <Input type="password" placeholder="Password" isError={isError} />
        {isError && <ErrorText>Error Text</ErrorText>}
      </InputContainer>
      <Button>Sign In</Button>
      <ClearButton>Clear</ClearButton>
    </form>
  );
};

export default SignInForm;
