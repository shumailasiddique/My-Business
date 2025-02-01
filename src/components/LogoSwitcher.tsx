import React from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/Logo.svg';

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const Logo = styled.img`
    width: 177px;
    height: 73px;
    object-fit: contain;

    @media (max-width: 768px) {
        width: 150px;
        height: 62px;
    }
`;

const LogoSwitcher: React.FC = () => {
    return (
        <LogoContainer>
            <Logo src={LogoImage} alt="Logo" />
        </LogoContainer>
    );
};

export default LogoSwitcher;


