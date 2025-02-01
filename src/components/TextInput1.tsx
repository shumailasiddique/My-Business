import React, { useState } from "react";
import styled from "styled-components";
import { StyleVariable, Color, FontFamily, FontSize } from "../styles/global";
import PasswordImage from '../assets/Vector.svg';

const TextinputChild = styled.input`position: absolute;
width: 99.63%;
right: 0.18%;
left: 0.19%;
border-radius: 4px;
background-color: #2e343d;
border: 2px solid #adde34;
box-sizing: border-box;
height: 50px;

`;
const Password = styled.div`position: absolute;
height: 19.33%;
top: -1rem;
left: 0px;
letter-spacing: -0.03em;
display: inline-block;
width: 75.4px;
mix-blend-mode: normal;
`;
const ErrorText = styled.i`position: absolute;
top: 82px;
left: 1px;
font-size: 13px;
letter-spacing: -0.03em;
color: #c73232;
`;
const Placeholder = styled.div`position: absolute;
top: 41px;
left: 18px;
letter-spacing: -0.03em;
color: #9fa8b6;
`;
const Textinput = styled.div`align-self: stretch;
position: relative;
height: 75px;
overflow: hidden;
flex-shrink: 0;
max-width:429px;
margin:3.7rem 0 0 ;
@media (max-width: 768px) {
 max-width:100%;
 margin:0;
 }
`;
const TextinputItem = styled.input`position: absolute;
width: 99.63%;
top: 24px;
right: 0.18%;
left: 0.19%;
border-radius: 4px;
background-color: #2e343d;
border: 2px solid #373d48;
box-sizing: border-box;
height: 50px;

`;
const Password1 = styled.div`position: absolute;
height: 19.39%;
top: 0%;
left: 0px;
letter-spacing: -0.03em;
display: inline-block;
width: 75.4px;
mix-blend-mode: normal;
`;
const Placeholder1 = styled.div`position: absolute;
top: 41px;
left: 18px;
letter-spacing: -0.03em;
`;
const Textinput1 = styled.div`align-self: stretch;
position: relative;
height: 98px;
color: #9fa8b6;
max-width:429px;
 @media (max-width: 768px) {
 max-width:100%;
 }
`;
const SignIn = styled.div`position: relative;
letter-spacing: -0.03em;
font-size: 28px;
font-weight: 600;
font-family: Inter;
color: #fff;
text-align: left;
@media (max-width: 768px) {
font-size: 16px;}

`;
const SignInWrapper = styled.div`position: absolute;
height: 81px;
width: 100%;
top: 33.82%;
right: 0%;
bottom: 0.06%;
left: 0%;
border-radius: 4px;
background-color: #2e343d;
border: 2px solid #373d48;
box-sizing: border-box;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 16px 0px;
max-width:429px;
 @media (max-width: 768px) {
 max-width:100%;
 height:44.3px;
 }
`;
const FormbuttonChild = styled.div`position: absolute;
height: 1.49%;
width: 100.31%;
top: 0.72%;
right: -0.15%;
bottom: 97.78%;
left: -0.15%;
box-sizing: border-box;
`;
const Formbutton = styled.div`align-self: stretch;
position: relative;
height: 67px;
`;
const VectorIcon = styled.img`position: absolute;
top: 46px;
right: 13px;
width: 17.1px;
height: 8px;

`;
const TextInput1:React.VFC = () => {
  
    return (
      <><Textinput>
        <TextinputChild type="email" id="email" />
        <Password>Email:</Password>
        <ErrorText />
        <Placeholder />
      </Textinput>
      <Textinput1>
          <TextinputItem type="password"  />
          <Password1>Password:</Password1>
          <VectorIcon alt="" src={PasswordImage} />
          <ErrorText>Error Text</ErrorText>
          <Placeholder1 />
        </Textinput1><Formbutton>
          <SignInWrapper>
            <SignIn>Sign In</SignIn>
          </SignInWrapper>
          <FormbuttonChild />
        </Formbutton></>   
    );
};

export default TextInput1;
