import { css } from 'styled-components';
import { styled } from 'styled-components';


export const fonts = {
  base: 'Inter, sans-serif',
};

export const textSizes = {
  mini: `0.8125rem`,
  regular: '1rem',
  smallHeading: '1.3125rem',
  mediumHeading: '1.5625rem',
  largeHeading: '1.75rem',
  boldHero: '2.875rem',
  mediumHero: '3.375rem',
};

const mediumHero = (color: string) => css`
  font-family: ${fonts.base};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -1.62px;
  font-size: ${textSizes.mediumHero};
  color: ${color};
`;

const boldHero = (color: string) => css`
  font-family: ${fonts.base};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: ${textSizes.boldHero};
  color: ${color};
`;

const largeHeading = (color: string) => css`
  font-family: ${fonts.base};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: ${textSizes.largeHeading};
  color: ${color};
`;

const mediumHeading = (color: string) => css`
  font-family: ${fonts.base};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: ${textSizes.mediumHeading};
  color: ${color};
`;

const smallHeading = (color: string) => css`
  font-family: ${fonts.base};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: ${textSizes.smallHeading};
  color: ${color};
`;

const capsHeading = (color: string) => css`
  font-family: ${fonts.base};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  text-transform: uppercase;
  font-size: ${textSizes.regular};
  color: ${color};
`;

const regular = (color: string) => css`
  font-family: ${fonts.base};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  font-size: ${textSizes.regular};
  color: ${color};
`;

const italic = (color: string) => css`
  font-family: ${fonts.base};
  font-style: italic;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.48px;
  font-size: ${textSizes.regular};
  color: ${color};
`;

const italicQuote = (color: string) => css`
  font-family: ${fonts.base};
  font-style: italic;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: -1.44px;
  font-size: ${textSizes.mediumHeading};
  color: ${color};
`;

const miniItalic = (color: string) => css`
  font-family: ${fonts.base};
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.02438rem;
  font-size: ${textSizes.mini};
  color: ${color};
`;

export const text = {
  mediumHero,
  boldHero,
  largeHeading,
  mediumHeading,
  smallHeading,
  capsHeading,
  regular,
  italic,
  italicQuote,
  miniItalic,
};

export const Heading = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;