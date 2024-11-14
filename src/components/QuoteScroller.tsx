import React from 'react';
import styled from 'styled-components';

const QuotescrollerParent = styled.div`
    position: relative;
    overflow: hidden;
    align-self: stretch;
    flex-shrink: 0;
    width: 100%;
    max-width:428px;
    height: 108px;
    font-family: Inter;
    font-size: 25px;
    color: #999b92;
    @media (max-width: 768px) {
    display: none;  // Hide the image on mobile view
  }
}
`;


const Quote = styled.i`position: absolute;
width: 100%;
top: calc(50% - 64px);
left: 0%;
letter-spacing: -0.03em;
line-height: 36px;
display: inline-block;
font-weight: 300;
`;
        

const Quotescroller: React.VFC = () => {
    return (
        <QuotescrollerParent>
        
         
         <Quote>"Success is not just about making a sale; it's about building a relationship that lasts."</Quote>
         
        </QuotescrollerParent>
    )
  }
  export default Quotescroller;
  

  