import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

interface SignInLayoutProps {
  children: React.ReactNode;
}

interface StyledPageProps {
  $isMobile: boolean; 
}

const SignInLayout: React.FC<SignInLayoutProps> = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return <StyledPage $isMobile={isMobile}>{children}</StyledPage>;
};

const StyledPage = styled.div<StyledPageProps>`
  height: 100%;
  padding: 36px;
  display: flex;
  flex-direction: column;

  #left {
    display: none;
  }

  #right {
    max-width: ${(props) => (props.$isMobile ? '100%' : '700px')};
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    height: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;

    #left {
      display: block;
      width: 30%;
      margin-bottom: 0;
    }

    #right {
      width: 70%;
      padding-left: 50px;
      padding-right: 50px;
      align-items: flex-start;
      text-align: left;
      justify-content: center;
    }
  }
`;

export default SignInLayout;
