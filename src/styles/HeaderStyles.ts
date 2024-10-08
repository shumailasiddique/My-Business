import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 20px;

  @media (min-width: 769px) {
    width: 150px;
    margin-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  @media (min-width: 769px) {
    font-size: 32px;
    text-align: left;
  }
`;
