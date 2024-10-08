import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';

interface FormButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onClear?: () => void;
  disabled?: boolean;
  [key: string]: any;
}

const FormButton: React.FC<FormButtonProps> = ({
  children,
  onClick,
  onClear,
  disabled = false,
  ...rest
}) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <ButtonContainer $isMobile={isMobile}>
      <Divider />
      <ButtonGroup>
        {!isMobile && (
          <ClearButton
            onClick={(e) => {
              e.preventDefault();
              if (onClear) onClear();
            }}
            $isMobile={isMobile}
          >
            {t('clear')}
          </ClearButton>
        )}
        <StyledButton
          onClick={onClick}
          disabled={disabled}
          $isMobile={isMobile}
          {...rest}
        >
          {children}
        </StyledButton>
      </ButtonGroup>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div<{ $isMobile: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ $isMobile }) => ($isMobile ? 'center' : 'flex-end')};
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borderA};
  margin-top: ${({ theme }) => theme.spacing.double};
  margin-bottom: ${({ theme }) => theme.spacing.double};
`;

const StyledButton = styled.button<{ $isMobile: boolean }>`
  ${({ theme }) => theme.typography.button};
  padding: ${({ theme }) =>
    `${theme.spacing.regular} ${theme.spacing.sixTimes}`};
  border: 2px solid ${({ theme }) => theme.colors.borderA};
  border-radius: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.backgroundA};
  transition: background-color 0.3s ease;
  width: ${({ $isMobile }) => ($isMobile ? '100%' : 'auto')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.backgroundA};
    color: ${({ theme }) => theme.colors.text};
    cursor: not-allowed;
  }
`;

const ClearButton = styled.button<{ $isMobile: boolean }>`
  ${({ theme }) => theme.typography.button};
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.label};
    cursor: not-allowed;
  }
`;

export default FormButton;
