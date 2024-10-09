import { FunctionComponent } from "react";
import ModeDarkIcon from "./ModeDarkIcon";
import QuoteScroller from "./QuoteScroller";
import TextInput from "./TextInput";
import FormButton from "./FormButton";
import styled from "styled-components";

export type HeaderType = {
  className?: string;
};

const HeaderRoot = styled.form`
  margin: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
`;

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <HeaderRoot className={className}>
      <ModeDarkIcon />
      <QuoteScroller
        quoteText={`"Success is not just about making a sale; it's about building a relationship that lasts."`}
      />
      <TextInput
        textInputHeight="79px"
        rectangleDivBorder="unset"
        password="Email:"
        passwordHeight="15.3px"
        passwordColor="#fff"
        showVectorIcon={false}
        errorText="asdasd"
        showErrorText={false}
        textInputGap="25.7px"
        
      />
      <TextInput
        password="Password:"
        vector="/../../public/vector.svg"
        showVectorIcon
        errorText="Error Text"
        showErrorText
      />
      <FormButton buttonText="Sign In" clearText="Clear" />
    </HeaderRoot>
  );
};

export default Header;
