
import styled from 'styled-components';

export const SignInFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px; // Adjust spacing as per design
  max-width: 400px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 16px; // Adjust padding for input fields
  border: 1px solid #388E3C; // Use forest green for borders
  border-radius: 8px;
  font-size: 16px;
  color: #212121; // Text color
  background-color: #F5F5F5; // Light grey for input background

  &::placeholder {
    color: #9E9E9E; // Lighter grey for placeholder text
  }
`;

export const ErrorText = styled.span`
  color: #D32F2F; // Red for error text
  font-size: 14px;
`;

export const Button = styled.button`
  background-color: #388E3C; // Forest Green for the button
  color: white;
  padding: 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2E7D32; // Darker green on hover
  }
`;
