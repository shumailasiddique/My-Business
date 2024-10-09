import { FunctionComponent } from "react";
import ImageViewerIcon from "../components/ImageViewerIcon";
import Header from "../components/Header";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 194px 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  @media screen and (max-width: 1200px) {
    flex: 1;
  }
  @media screen and (max-width: 1050px) {
    padding-top: 126px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-top: 82px;
    box-sizing: border-box;
  }
`;
const DesktopRoot = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(130.46deg, #2e343d, #262a32);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px 22px 29px;
  box-sizing: border-box;
  gap: 288.5px;
  line-height: normal;
  letter-spacing: normal;
  @media screen and (max-width: 1200px) {
    gap: 144px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 750px) {
    gap: 72px;
  }
  @media screen and (max-width: 450px) {
    gap: 36px;
  }
`;

const Desktop: FunctionComponent = () => {
  return (
    <DesktopRoot>
      <ImageViewerIcon />
      <Content>
        <Header />
      </Content>
    </DesktopRoot>
  );
};

export default Desktop;
