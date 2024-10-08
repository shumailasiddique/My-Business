import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.fonts.medium};
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
