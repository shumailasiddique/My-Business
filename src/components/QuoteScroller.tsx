import { FunctionComponent } from "react";
import styled from "styled-components";

export type QuoteScrollerType = {
  className?: string;
  quoteText?: string;
};

const SuccessIsNot = styled.blockquote`
  margin: 0;
  width: 438.8px;
  position: relative;
  letter-spacing: -0.03em;
  line-height: 36px;
  display: inline-block;
  font-style: italic;
  font-weight: 300;
  flex-shrink: 0;
`;
const QuotescrollerRoot = styled.div`
  width: 438.8px;
  height: 287px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-89xl) 0px var(--padding-52xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--italicquote-size);
  color: var(--grey500);
  font-family: var(--miniitalic);
`;

const QuoteScroller: FunctionComponent<QuoteScrollerType> = ({
  className = "",
  quoteText = '"Success is not just about making a sale; it\'s about building a relationship that lasts."',
}) => {
  return (
    <QuotescrollerRoot className={className}>
      <SuccessIsNot>{quoteText}</SuccessIsNot>
    </QuotescrollerRoot>
  );
};

export default QuoteScroller;
