import { FunctionComponent } from "react";
import styled from "styled-components";

export type FormButtonType = {
  className?: string;
  buttonText?: string;
  clearText?: string;
};

const ButtonDivider = styled.div`
  width: 439.8px;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--bordera);
  box-sizing: border-box;
`;
const Clear = styled.div`
  width: 117.9px;
  height: 17.4px;
  position: relative;
  letter-spacing: -0.03em;
  display: inline-block;
  flex-shrink: 0;
`;
const ClearButton = styled.div`
  height: 31.2px;
  width: 116.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm-8) 0px 0px;
  box-sizing: border-box;
`;
const SignIn = styled.div`
  height: 19px;
  width: 50px;
  position: relative;
  font-size: var(--regular-size);
  letter-spacing: -0.03em;
  font-family: var(--miniitalic);
  color: var(--text);
  text-align: left;
  display: inline-block;
  flex-shrink: 0;
`;
const SignInButton = styled.button`
  cursor: pointer;
  border: 2px solid var(--bordera);
  padding: var(--padding-smi-6) var(--padding-78xl) var(--padding-smi-7);
  background-color: var(--backgrounda);
  height: 44.3px;
  width: 243px;
  border-radius: var(--tight);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ButtonContent = styled.div`
  width: 438.7px;
  height: 44.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-59xl-8);
`;
const FormbuttonRoot = styled.div`
  width: 438.8px;
  height: 67px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-2xl-7);
  text-align: center;
  font-size: var(--regular-size);
  color: var(--grey500);
  font-family: var(--miniitalic);
`;

const FormButton: FunctionComponent<FormButtonType> = ({
  className = "",
  buttonText = "Sign In",
  clearText = "Clear",
}) => {
  return (
    <FormbuttonRoot className={className}>
      <ButtonDivider />
      <ButtonContent>
        <ClearButton>
          <Clear>{clearText}</Clear>
        </ClearButton>
        <SignInButton>
          <SignIn>{buttonText}</SignIn>
        </SignInButton>
      </ButtonContent>
    </FormbuttonRoot>
  );
};

export default FormButton;
