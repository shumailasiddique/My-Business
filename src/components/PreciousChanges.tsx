import { useState } from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/Logo.svg';
import Vector from '../assets/Vector.svg';
import GreenTrees from '../assets/green-trees.jpg';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  background: #2c313a;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    background: #2c313a;
    height: 100vh;
    overflow: auto;
  }
`;

const ImageSection = styled.div`
     display: flex;
     position: relative;
     width: 100%;
     max-width: 100%;
     height: 46.68rem;
     overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
    max-width: 100%;
    padding: 1.5rem 5.19rem 1.8rem 1.4rem;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const FormSection = styled.div`
  display: flex;
  padding: 1.5rem;
  box-sizing: border-box;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1.25rem;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: unset;
    height: 100vh;
    background: #2E343D;
  }
`;

const FormContainer = styled.div`
  max-width: 428px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
 

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 0.25rem;
    gap: 0.75rem;
    height:100%;
  }
`;

const Logo = styled.img`
  width: 170px;
  height: 57px;
  margin-bottom: 0;

  @media (max-width: 768px) {
    width: 11.125rem;
    flex: 1;
    position: relative;
    max-height: 375px;
    align-self: center;

  }
`;

const Quote = styled.p`
    color: #999B92;
    font-size: 1.563rem;
    line-height: 2.25rem;
    font-style: italic;
    font-weight: 300;
    margin: 0;
    padding: 0.5rem 0 0.75rem;
    letter-spacing: -0.03rem;

  @media (max-width: 768px) {
    display: none;
  }
`;


const Label = styled.label`
  display: block;
  color: #6F767E;
  font-size: 0.8125rem;
  margin-bottom: 0.375rem;
  font-weight: 500;
  transition: color 0.15s ease;
  letter-spacing: -0.01em;
`;


const FormGroup = styled.div`
  margin-bottom: 1.25rem;
  position: relative;
  width: 100%;

  &:focus-within ${Label} {
    color: #FFF;
  }

  &:last-of-type {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 0.5rem;
    }
  }
`;



const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  background: #2E343D;
  border: 2px solid #373d48;
  border-radius: 4px;
  color: #FFFFFF;
  font-size: 0.9375rem;
  transition: all 0.15s ease;
  box-sizing: border-box;
  letter-spacing: -0.01em;

  &:focus {
    border-color: #ADDE34;
    outline: none;
    background: #2e343d;
  }

  &:hover:not(:focus) {
    border-color: #ADDE34;
  }

  &::placeholder {
    color: #6F767E;
    opacity: 0.7;
    font-size: 0.875rem;
    letter-spacing: -0.01em;
  }

  &:focus::placeholder {
    opacity: 1;
    
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 0.875rem;
  }
`;




const PasswordIcon = styled.img`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 7px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.15s ease;
  user-select: none;

  &:hover {
    opacity: 1;
  }
`;

const Button = styled.button`
     width: 100%;
    height: 81px;
    background: #2e343d;
    color: #fff;
    border: 2px solid #373d48;
    border-radius: 4px;
    font-size: 1.75rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
    padding: 0;
    margin-top: 4.19rem;
    letter-spacing: -0.01em;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    height: 67px;
    margin-top: 0.25rem;
    font-size: 0.875rem;
  }
`;







const ErrorText = styled.span<{ visible: boolean }>`
  color: #c73232;
  font-size: 0.8125rem;
  display: ${props => props.visible ? 'block' : 'none'};
  margin: 1.5rem 0 1.35rem 0;
  letter-spacing: -0.01em;
  border-bottom: 2px solid #373d48;
  padding-bottom: 0.25rem; // Add spacing between text and line

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    border-bottom-width: 0.5px; // Optional: make slightly thinner on mobile
  }
`;


const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Error Text!');
      return;
    }
    setError('Error Text!');
  };

  return (
    <Container>
      <ImageSection>
        <img src={GreenTrees} alt="Nature Background" />
      </ImageSection>
      <FormSection>
        <FormContainer>
          <Logo src={LogoImage} alt="Business Logo" />
          <Quote>
            "Success is not just about making a sale; it's about building a relationship that lasts."
          </Quote>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <InputWrapper>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordIcon 
                  src={Vector} 
                  alt="toggle password" 
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ cursor: 'pointer' }}
                />
              </InputWrapper>
            </FormGroup>
            <ErrorText visible={!!error}>{error}</ErrorText>
            <Button type="submit">Sign In</Button>
          </form>
        </FormContainer>
      </FormSection>
    </Container>

  );
};

export default SignInPage;
