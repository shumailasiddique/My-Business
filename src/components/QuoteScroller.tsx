import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
    width: 100%;
    max-width: 429px;
    margin: 2.5rem 0;
    position: relative;
`;

const QuoteText = styled.div`
    font-size: 25px;
    color: #999B92;
    font-family: Inter;
    font-style: italic;
    font-weight: 300;
    line-height: 36px;
    letter-spacing: -0.03em;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Quotescroller: React.FC = () => {
    return (
        <QuoteContainer>
            <QuoteText>
                "Success is not just about making a sale; it's about building a relationship that lasts."
            </QuoteText>
        </QuoteContainer>
    );
};

export default Quotescroller;
