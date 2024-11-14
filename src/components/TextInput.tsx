import { FunctionComponent } from 'react';
import styled from "styled-components";

const ImageviewerIcon = styled.img`position: absolute;
height: calc(100% - 53px);
width: 41.8%;
top: 24px;
right: 56.48%;
bottom: 29px;
left: 1.72%;
border-radius: 12px;
max-width: 100%;
overflow: hidden;
max-height: 100%;
object-fit: cover;
`;
const LogoswitcherIcon = styled.img`position: absolute;
top: 24px;
left: 706px;
width: 177px;
height: 73px;
`;
const SuccessIsNot = styled.i`position: absolute;
width: 100%;
top: calc(50% - 64px);
left: 0%;
letter-spacing: -0.03em;
line-height: 36px;
display: inline-block;
font-weight: 300;
`;
const Quotescroller = styled.div`position: absolute;
top: 128px;
left: 688px;
width: 428px;
height: 108px;
font-size: 25px;
color: #999b92;
`;
const TextinputChild = styled.div`position: absolute;
width: 99.63%;
top: 24px;
right: 0.19%;
left: 0.19%;
border-radius: 4px;
background-color: #2e343d;
border: 2px solid #adde34;
box-sizing: border-box;
height: 50px;
`;
const Password = styled.div`position: absolute;
height: 19.37%;
top: 0%;
left: 0px;
letter-spacing: -0.03em;
display: inline-block;
width: 75.4px;
mix-blend-mode: normal;
`;
const Placeholder = styled.div`position: absolute;
top: 41px;
left: 18px;
letter-spacing: -0.03em;
color: #9fa8b6;
`;
const Textinput = styled.div`position: absolute;
top: 278px;
left: 688.16px;
width: 428px;
height: 79px;
`;
const TextinputItem = styled.div`position: absolute;
width: 99.63%;
top: 24px;
right: 0.19%;
left: 0.19%;
border-radius: 4px;
background-color: #2e343d;
border: 2px solid #373d48;
box-sizing: border-box;
height: 50px;
`;
const Password1 = styled.div`position: absolute;
height: 19.38%;
top: 0%;
left: 0px;
letter-spacing: -0.03em;
display: inline-block;
width: 75.4px;
mix-blend-mode: normal;
`;
const VectorIcon = styled.img`position: absolute;
top: 46px;
right: 23.12px;
width: 17.1px;
height: 8px;
`;
const ErrorText = styled.i`position: absolute;
top: 82px;
left: 1px;
font-size: 13px;
letter-spacing: -0.03em;
color: #c73232;
`;
const Placeholder1 = styled.div`position: absolute;
top: 41px;
left: 18px;
letter-spacing: -0.03em;
`;
const Textinput1 = styled.div`position: absolute;
top: 384px;
left: 688.16px;
width: 428px;
height: 97px;
color: #9fa8b6;
`;
const SignIn = styled.div`position: relative;
font-weight: 600;
`;
const SignInWrapper = styled.div`position: absolute;
height: 10.13%;
top: 68.5%;
right: 164px;
bottom: 21.38%;
border-radius: 4px;
background-color: #2e343d;
border: 2px solid #373d48;
box-sizing: border-box;
width: 427px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 16px 0px;
font-size: 28px;
`;
const PreciousChangesRoot = styled.div`width: 100%;
position: relative;
background: linear-gradient(130.46deg, #2e343d, #262a32);
height: 800px;
overflow: hidden;
text-align: left;
font-size: 16px;
color: #fff;
font-family: Inter;
`;


const PreciousChanges:FunctionComponent = () => {
    return (
        <PreciousChangesRoot>
            <ImageviewerIcon alt="" src="ImageViewer.png" />
            <LogoswitcherIcon alt="" src="LogoSwitcher.svg" />
            <Quotescroller>
                <SuccessIsNot>"Success is not just about making a sale; it's about building a relationship that lasts."</SuccessIsNot>
            </Quotescroller>
            <Textinput>
                <TextinputChild />
                <Password>Email:</Password>
                <Placeholder />
            </Textinput>
            <Textinput1>
                <TextinputItem />
                <Password1>Password:</Password1>
                <VectorIcon alt="" src="Vector.svg" />
                <ErrorText>Error Text</ErrorText>
                <Placeholder1 />
            </Textinput1>
            <SignInWrapper>
                <SignIn>Sign In</SignIn>
            </SignInWrapper>
        </PreciousChangesRoot>);
};

export default PreciousChanges;
