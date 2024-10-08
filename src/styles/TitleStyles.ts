import styled from 'styled-components';

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    margin-bottom: 40px;
  }
`;

export const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fonts.large};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
`;
