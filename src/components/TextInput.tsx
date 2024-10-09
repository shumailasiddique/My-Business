import { FunctionComponent, type CSSProperties } from "react";
import styled from "styled-components";

export type TextInputType = {
  className?: string;
  password?: string;
  vector?: string;
  showVectorIcon?: boolean;
  errorText?: string;
  showErrorText?: boolean;
  placeholderText?: string;

  /** Style props */
  textInputHeight?: CSSProperties["height"];
  rectangleDivBorder?: CSSProperties["border"];
  passwordHeight?: CSSProperties["height"];
  passwordColor?: CSSProperties["color"];
  textInputGap?: CSSProperties["gap"];
  passwordBorder?: CSSProperties["border"];
  passwordOutline?: CSSProperties["outline"];
  passwordBackgroundColor?: CSSProperties["backgroundColor"];
  inputVisualWidth?: CSSProperties["width"];
  inputVisualHeight?: CSSProperties["height"];
  inputVisualFlexDirection?: CSSProperties["flexDirection"];
  inputVisualPadding?: CSSProperties["padding"];
  inputInnerHeight?: CSSProperties["height"];
  inputInnerWidth?: CSSProperties["width"];
  inputInnerFlexDirection?: CSSProperties["flexDirection"];
  inputInnerGap?: CSSProperties["gap"];
  inputInnerFontSize?: CSSProperties["fontSize"];
  inputInnerFontFamily?: CSSProperties["fontFamily"];
  inputInnerColor?: CSSProperties["color"];
  inputInnerTextAlign?: CSSProperties["textAlign"];
  inputInnerFontStyle?: CSSProperties["fontStyle"];
  inputPaddingHeight?: CSSProperties["height"];
  inputPaddingWidth?: CSSProperties["width"];
  inputPaddingFlexDirection?: CSSProperties["flexDirection"];
  inputPaddingGap?: CSSProperties["gap"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  frameDivDisplay?: CSSProperties["display"];
  frameDivFlexDirection?: CSSProperties["flexDirection"];
  frameDivPosition?: CSSProperties["position"];
  frameDivMargin?: CSSProperties["margin"];
  frameDivTop?: CSSProperties["top"];
  frameDivRight?: CSSProperties["right"];
  frameDivBorderRadius?: CSSProperties["borderRadius"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivBorder?: CSSProperties["border"];
  rectangleInputOutline?: CSSProperties["outline"];
  rectangleInputBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleInputHeight?: CSSProperties["height"];
  rectangleInputWidth?: CSSProperties["width"];
  rectangleInputPosition?: CSSProperties["position"];
  rectangleInputMargin?: CSSProperties["margin"];
  rectangleInputTop?: CSSProperties["top"];
  rectangleInputRight?: CSSProperties["right"];
  rectangleInputBorderRadius?: CSSProperties["borderRadius"];
  rectangleInputDisplay?: CSSProperties["display"];
  rectangleInputFlexDirection?: CSSProperties["flexDirection"];
  rectangleInputPadding?: CSSProperties["padding"];
  inputPlaceholderContainerWidth?: CSSProperties["width"];
  inputPlaceholderContainerDisplay?: CSSProperties["display"];
  inputPlaceholderContainerFlexDirection?: CSSProperties["flexDirection"];
  inputPlaceholderContainerPadding?: CSSProperties["padding"];
  inputPlaceholderContainerFontSize?: CSSProperties["fontSize"];
  inputPlaceholderContainerFontFamily?: CSSProperties["fontFamily"];
  inputPlaceholderContainerColor?: CSSProperties["color"];
  inputPlaceholderContainerTextAlign?: CSSProperties["textAlign"];
};

const Password1 = styled.div<{
  passwordHeight?: CSSProperties["height"];
  passwordColor?: CSSProperties["color"];
  passwordBorder?: CSSProperties["border"];
  passwordOutline?: CSSProperties["outline"];
  passwordBackgroundColor?: CSSProperties["backgroundColor"];
}>`width: 76.4px;
  height: 18.8px;
  position: relative;
  letter-spacing: -0.03em;
  display: inline-block;
  flex-shrink: 0;
  mix-blend-mode: normal;
  height: ${(p) => p.passwordHeight}
  color: ${(p) => p.passwordColor}
  border: ${(p) => p.passwordBorder}
  outline: ${(p) => p.passwordOutline}
  background-color: ${(p) => p.passwordBackgroundColor}
`;
const FrameChild = styled.input<{
  rectangleDivBorder?: CSSProperties["border"];
  rectangleInputOutline?: CSSProperties["outline"];
  rectangleInputBackgroundColor?: CSSProperties["backgroundColor"];
  rectangleInputHeight?: CSSProperties["height"];
  rectangleInputWidth?: CSSProperties["width"];
  rectangleInputPosition?: CSSProperties["position"];
  rectangleInputMargin?: CSSProperties["margin"];
  rectangleInputTop?: CSSProperties["top"];
  rectangleInputRight?: CSSProperties["right"];
  rectangleInputBorderRadius?: CSSProperties["borderRadius"];
  rectangleInputDisplay?: CSSProperties["display"];
  rectangleInputFlexDirection?: CSSProperties["flexDirection"];
  rectangleInputPadding?: CSSProperties["padding"];
}>`border: 2px solid var(--bordera);
  outline: none;
  background-color: var(--backgrounda);
  height: 50px;
  width: 437.1px;
  position: absolute;
  margin: 0 !important;
  top: -17px;
  right: -419.9px;
  border-radius: var(--tight);
  box-sizing: border-box;
  border: ${(p) => p.rectangleDivBorder}
  outline: ${(p) => p.rectangleInputOutline}
  background-color: ${(p) => p.rectangleInputBackgroundColor}
  height: ${(p) => p.rectangleInputHeight}
  width: ${(p) => p.rectangleInputWidth}
  position: ${(p) => p.rectangleInputPosition}
  margin: ${(p) => p.rectangleInputMargin}
  top: ${(p) => p.rectangleInputTop}
  right: ${(p) => p.rectangleInputRight}
  border-radius: ${(p) => p.rectangleInputBorderRadius}
  display: ${(p) => p.rectangleInputDisplay}
  flex-direction: ${(p) => p.rectangleInputFlexDirection}
  padding: ${(p) => p.rectangleInputPadding}
`;
const Placeholder = styled.div`
  height: 19px;
  width: 1px;
  position: relative;
  letter-spacing: -0.03em;
  display: inline-block;
  flex-shrink: 0;
  z-index: 1;
`;
const InputPlaceholderContainer = styled.div<{
  inputPlaceholderContainerWidth?: CSSProperties["width"];
  inputPlaceholderContainerDisplay?: CSSProperties["display"];
  inputPlaceholderContainerFlexDirection?: CSSProperties["flexDirection"];
  inputPlaceholderContainerPadding?: CSSProperties["padding"];
  inputPlaceholderContainerFontSize?: CSSProperties["fontSize"];
  inputPlaceholderContainerFontFamily?: CSSProperties["fontFamily"];
  inputPlaceholderContainerColor?: CSSProperties["color"];
  inputPlaceholderContainerTextAlign?: CSSProperties["textAlign"];
}>`height: 19px;
  width: 17px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-mid);
  box-sizing: border-box;
  width: ${(p) => p.inputPlaceholderContainerWidth}
  display: ${(p) => p.inputPlaceholderContainerDisplay}
  flex-direction: ${(p) => p.inputPlaceholderContainerFlexDirection}
  padding: ${(p) => p.inputPlaceholderContainerPadding}
  font-size: ${(p) => p.inputPlaceholderContainerFontSize}
  font-family: ${(p) => p.inputPlaceholderContainerFontFamily}
  color: ${(p) => p.inputPlaceholderContainerColor}
  text-align: ${(p) => p.inputPlaceholderContainerTextAlign}
`;
const RectangleParent = styled.div<{
  rectangleDivBorder?: CSSProperties["border"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight?: CSSProperties["height"];
  frameDivDisplay?: CSSProperties["display"];
  frameDivFlexDirection?: CSSProperties["flexDirection"];
  frameDivPosition?: CSSProperties["position"];
  frameDivMargin?: CSSProperties["margin"];
  frameDivTop?: CSSProperties["top"];
  frameDivRight?: CSSProperties["right"];
  frameDivBorderRadius?: CSSProperties["borderRadius"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivBorder?: CSSProperties["border"];
}>`width: 17px;
  height: 19px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  border: ${(p) => p.rectangleDivBorder}
  width: ${(p) => p.frameDivWidth}
  height: ${(p) => p.frameDivHeight}
  display: ${(p) => p.frameDivDisplay}
  flex-direction: ${(p) => p.frameDivFlexDirection}
  position: ${(p) => p.frameDivPosition}
  margin: ${(p) => p.frameDivMargin}
  top: ${(p) => p.frameDivTop}
  right: ${(p) => p.frameDivRight}
  border-radius: ${(p) => p.frameDivBorderRadius}
  background-color: ${(p) => p.frameDivBackgroundColor}
  border: ${(p) => p.frameDivBorder}
`;
const ErrorText = styled.i`
  width: 58px;
  height: 16px;
  position: relative;
  font-size: var(--miniitalic-size);
  letter-spacing: -0.03em;
  display: inline-block;
  color: var(--red);
  flex-shrink: 0;
`;
const InputPadding = styled.div<{
  inputPaddingHeight?: CSSProperties["height"];
  inputPaddingWidth?: CSSProperties["width"];
  inputPaddingFlexDirection?: CSSProperties["flexDirection"];
  inputPaddingGap?: CSSProperties["gap"];
}>`height: 57px;
  width: 57px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xl);
  flex-shrink: 0;
  height: ${(p) => p.inputPaddingHeight}
  width: ${(p) => p.inputPaddingWidth}
  flex-direction: ${(p) => p.inputPaddingFlexDirection}
  gap: ${(p) => p.inputPaddingGap}
`;
const ErrorIcon = styled.img`
  width: 17.1px;
  height: 8px;
  position: relative;
  flex-shrink: 0;
  z-index: 1;
`;
const InputIcon = styled.div`
  height: 13px;
  width: 17.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
`;
const InputInner = styled.div<{
  inputInnerHeight?: CSSProperties["height"];
  inputInnerWidth?: CSSProperties["width"];
  inputInnerFlexDirection?: CSSProperties["flexDirection"];
  inputInnerGap?: CSSProperties["gap"];
  inputInnerFontSize?: CSSProperties["fontSize"];
  inputInnerFontFamily?: CSSProperties["fontFamily"];
  inputInnerColor?: CSSProperties["color"];
  inputInnerTextAlign?: CSSProperties["textAlign"];
  inputInnerFontStyle?: CSSProperties["fontStyle"];
}>`height: 57px;
  width: 414.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-321xl-8);
  flex-shrink: 0;
  height: ${(p) => p.inputInnerHeight}
  width: ${(p) => p.inputInnerWidth}
  flex-direction: ${(p) => p.inputInnerFlexDirection}
  gap: ${(p) => p.inputInnerGap}
  font-size: ${(p) => p.inputInnerFontSize}
  font-family: ${(p) => p.inputInnerFontFamily}
  color: ${(p) => p.inputInnerColor}
  text-align: ${(p) => p.inputInnerTextAlign}
  font-style: ${(p) => p.inputInnerFontStyle}
`;
const InputVisual = styled.div<{
  inputVisualWidth?: CSSProperties["width"];
  inputVisualHeight?: CSSProperties["height"];
  inputVisualFlexDirection?: CSSProperties["flexDirection"];
  inputVisualPadding?: CSSProperties["padding"];
}>`width: 415.9px;
  height: 57px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  width: ${(p) => p.inputVisualWidth}
  height: ${(p) => p.inputVisualHeight}
  flex-direction: ${(p) => p.inputVisualFlexDirection}
  padding: ${(p) => p.inputVisualPadding}
`;
const TextinputRoot = styled.div<{
  textInputHeight?: CSSProperties["height"];
  textInputGap?: CSSProperties["gap"];
}>`width: 438.8px;
  height: 97px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-59xl-2);
  box-sizing: border-box;
  gap: var(--gap-3xl-2);
  text-align: left;
  font-size: var(--regular-size);
  color: var(--grey500);
  font-family: var(--miniitalic);
  height: ${(p) => p.textInputHeight}
  gap: ${(p) => p.textInputGap}
`;

const TextInput: FunctionComponent<TextInputType> = ({
  className = "",
  textInputHeight,
  rectangleDivBorder,
  password,
  passwordHeight,
  passwordColor,
  vector,
  showVectorIcon,
  errorText,
  showErrorText,
  textInputGap,
  passwordBorder,
  passwordOutline,
  passwordBackgroundColor,
  inputVisualWidth,
  inputVisualHeight,
  inputVisualFlexDirection,
  inputVisualPadding,
  inputInnerHeight,
  inputInnerWidth,
  inputInnerFlexDirection,
  inputInnerGap,
  inputInnerFontSize,
  inputInnerFontFamily,
  inputInnerColor,
  inputInnerTextAlign,
  inputInnerFontStyle,
  inputPaddingHeight,
  inputPaddingWidth,
  inputPaddingFlexDirection,
  inputPaddingGap,
  frameDivWidth,
  frameDivHeight,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivPosition,
  frameDivMargin,
  frameDivTop,
  frameDivRight,
  frameDivBorderRadius,
  frameDivBackgroundColor,
  frameDivBorder,
  rectangleInputOutline,
  rectangleInputBackgroundColor,
  rectangleInputHeight,
  rectangleInputWidth,
  rectangleInputPosition,
  rectangleInputMargin,
  rectangleInputTop,
  rectangleInputRight,
  rectangleInputBorderRadius,
  rectangleInputDisplay,
  rectangleInputFlexDirection,
  rectangleInputPadding,
  inputPlaceholderContainerWidth,
  inputPlaceholderContainerDisplay,
  inputPlaceholderContainerFlexDirection,
  inputPlaceholderContainerPadding,
  inputPlaceholderContainerFontSize,
  inputPlaceholderContainerFontFamily,
  inputPlaceholderContainerColor,
  inputPlaceholderContainerTextAlign,
  placeholderText,
}) => {
  return (
    <TextinputRoot
      textInputHeight={textInputHeight}
      textInputGap={textInputGap}
      className={className}
    >
      <Password1
        passwordHeight={passwordHeight}
        passwordColor={passwordColor}
        passwordBorder={passwordBorder}
        passwordOutline={passwordOutline}
        passwordBackgroundColor={passwordBackgroundColor}
      >
        {password}
      </Password1>
      {showVectorIcon && (
        <InputVisual
          inputVisualWidth={inputVisualWidth}
          inputVisualHeight={inputVisualHeight}
          inputVisualFlexDirection={inputVisualFlexDirection}
          inputVisualPadding={inputVisualPadding}
        >
          {showErrorText && (
            <InputInner
              inputInnerHeight={inputInnerHeight}
              inputInnerWidth={inputInnerWidth}
              inputInnerFlexDirection={inputInnerFlexDirection}
              inputInnerGap={inputInnerGap}
              inputInnerFontSize={inputInnerFontSize}
              inputInnerFontFamily={inputInnerFontFamily}
              inputInnerColor={inputInnerColor}
              inputInnerTextAlign={inputInnerTextAlign}
              inputInnerFontStyle={inputInnerFontStyle}
            >
              <InputPadding
                inputPaddingHeight={inputPaddingHeight}
                inputPaddingWidth={inputPaddingWidth}
                inputPaddingFlexDirection={inputPaddingFlexDirection}
                inputPaddingGap={inputPaddingGap}
              >
                <RectangleParent
                  rectangleDivBorder={rectangleDivBorder}
                  frameDivWidth={frameDivWidth}
                  frameDivHeight={frameDivHeight}
                  frameDivDisplay={frameDivDisplay}
                  frameDivFlexDirection={frameDivFlexDirection}
                  frameDivPosition={frameDivPosition}
                  frameDivMargin={frameDivMargin}
                  frameDivTop={frameDivTop}
                  frameDivRight={frameDivRight}
                  frameDivBorderRadius={frameDivBorderRadius}
                  frameDivBackgroundColor={frameDivBackgroundColor}
                  frameDivBorder={frameDivBorder}
                >
                  <FrameChild
                    type="text"
                    rectangleDivBorder={rectangleDivBorder}
                    rectangleInputOutline={rectangleInputOutline}
                    rectangleInputBackgroundColor={
                      rectangleInputBackgroundColor
                    }
                    rectangleInputHeight={rectangleInputHeight}
                    rectangleInputWidth={rectangleInputWidth}
                    rectangleInputPosition={rectangleInputPosition}
                    rectangleInputMargin={rectangleInputMargin}
                    rectangleInputTop={rectangleInputTop}
                    rectangleInputRight={rectangleInputRight}
                    rectangleInputBorderRadius={rectangleInputBorderRadius}
                    rectangleInputDisplay={rectangleInputDisplay}
                    rectangleInputFlexDirection={rectangleInputFlexDirection}
                    rectangleInputPadding={rectangleInputPadding}
                  />
                  <InputPlaceholderContainer
                    inputPlaceholderContainerWidth={
                      inputPlaceholderContainerWidth
                    }
                    inputPlaceholderContainerDisplay={
                      inputPlaceholderContainerDisplay
                    }
                    inputPlaceholderContainerFlexDirection={
                      inputPlaceholderContainerFlexDirection
                    }
                    inputPlaceholderContainerPadding={
                      inputPlaceholderContainerPadding
                    }
                    inputPlaceholderContainerFontSize={
                      inputPlaceholderContainerFontSize
                    }
                    inputPlaceholderContainerFontFamily={
                      inputPlaceholderContainerFontFamily
                    }
                    inputPlaceholderContainerColor={
                      inputPlaceholderContainerColor
                    }
                    inputPlaceholderContainerTextAlign={
                      inputPlaceholderContainerTextAlign
                    }
                  >
                    <Placeholder>{placeholderText}</Placeholder>
                  </InputPlaceholderContainer>
                </RectangleParent>
                {showErrorText && <ErrorText>{errorText}</ErrorText>}
              </InputPadding>
              <InputIcon>
                {showVectorIcon && (
                  <ErrorIcon loading="lazy" alt="" src={vector} />
                )}
              </InputIcon>
            </InputInner>
          )}
        </InputVisual>
      )}
    </TextinputRoot>
  );
};

export default TextInput;
