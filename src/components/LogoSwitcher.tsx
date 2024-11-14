import React from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/Logo.svg';

const LogoswitcherIcon = styled.img`
width: 178px;
flex: 1;
position: relative;
max-height: 73px;
align-self: stretch;
@media (max-width: 768px) {
 max-height: 100%;
 align-self: center;
}
`;




const LogoSwitcher: React.VFC = () => {
    return (

        <LogoswitcherIcon src={LogoImage} />


    )
}
export default LogoSwitcher;


