import React, { useState } from 'react';
import { FormWrapper, InputField, SubmitButton } from '../styles/FormStyles';

const Form: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission here
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton type="submit">Sign In</SubmitButton>
    </FormWrapper>
  );
};

export default Form;
