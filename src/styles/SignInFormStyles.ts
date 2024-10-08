import styled from 'styled-components';

export const SignInFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px; // Adjust spacing as per design
  max-width: 400px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 15px; // Adjust padding for input fields
  border: 1px solid ${({ theme }) => theme.colors.primary}; // Use design colors for borders
  border-radius: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundInput}; // Background color for input
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primaryHover}; // Border color on focus
  }
`;

export const Button = styled.button`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
`;
