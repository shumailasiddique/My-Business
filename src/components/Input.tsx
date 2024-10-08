import React from 'react';
import { InputWrapper, InputLabel, StyledInput } from '../styles/InputStyles';

interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, name, value, onChange }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <StyledInput
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required
      />
    </InputWrapper>
  );
};

export default Input;
