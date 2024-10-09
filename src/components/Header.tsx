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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission and page reload
  };
  return (
    <HeaderRoot className={className}>
     
      <QuoteScroller
        quoteText={`"Success is not just about making a sale; it's about building a relationship that lasts."`}
      />
 <TextInput
        textInputHeight="79px"
        password="Email:"
        // Removed extra unnecessary props
      />
      <TextInput password="Password:" showVectorIcon errorText="Error Text" showErrorText />
      <FormButton buttonText="Sign In" clearText="Clear" />
    </HeaderRoot>
  );
};

export default Header;
