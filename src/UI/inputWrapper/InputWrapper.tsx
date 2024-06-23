import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

export interface InputWrapperProps {
  background?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  disabledMessage?: string;
  disabledMessageColor?: string;
  disabledBackgroundColor?: string;
  upperPlaceHolderColor?: string;
  hoverBorderColor?: string;
  focusBorderColor?: string;
  minWidth?: string;
}

const StyledInputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;

  > * {
    background-color: ${({ background = "white" }) => background};
    color: ${({ color = "black" }) => color};
    padding: ${({ padding = "10px" }) => padding};
    border-radius: ${({ borderRadius = "5px" }) => borderRadius};
    border-color: ${({ borderColor = "#E5E5EA" }) => borderColor};
    border-width: ${({ borderWidth = "1px" }) => borderWidth};
    &:disabled {
      background-color: ${({ disabledBackgroundColor = "lightgray" }) =>
        disabledBackgroundColor};
    }
    &:hover {
      border: none;
      box-shadow: ${({ hoverBorderColor = "#FFA920" }) => hoverBorderColor} 0px
        0px 0px 2px;
    }
    &:focus {
      border: none;
      box-shadow: ${({ focusBorderColor = "#FFA920" }) => focusBorderColor} 0px
        0px 0px 1px;
    }
    outline: none;
  }
`;

const StyledSpan = styled.span<InputWrapperProps>`
  position: relative;
  min-width: ${({ minWidth = "10rem" }) => minWidth};
  #disabledMessage,
  #upperPlaceHolder {
    display: none;
  }
  &:hover {
    #disabledMessage {
      display: block;
      position: absolute;
      color: ${({ disabledMessageColor = "#FFA920" }) => disabledMessageColor};
    }
    #upperPlaceHolder {
      display: block;
      position: absolute;
      color: ${({ upperPlaceHolderColor = "#FFA920" }) =>
        upperPlaceHolderColor};
      z-index: 9;
    }
  }
`;

const InputWrapper = (props: PropsWithChildren<InputWrapperProps>) => {
  const { children, disabledMessage = "Input Disabled", ...otherProps } = props;

  const [StyledInputWrapperHeight, setStyledInputWrapperHeight] = useState(0);

  const StyledInputWrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (StyledInputWrapperRef.current) {
      setStyledInputWrapperHeight(StyledInputWrapperRef.current.clientHeight);
    }
  }, [StyledInputWrapperRef]);

  const isInputDisabled =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (children as any)?.props?.isDisabled ?? (children as any)?.props?.disabled;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isValueSet = !!(children as any)?.props?.value;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const placeholder = (children as any)?.props?.placeholder;

  return (
    <StyledSpan {...otherProps}>
      {isValueSet && (
        <label
          id="upperPlaceHolder"
          style={{ bottom: `${StyledInputWrapperHeight}px` }}
        >
          {placeholder}
        </label>
      )}
      <StyledInputWrapper ref={StyledInputWrapperRef} {...otherProps}>
        {children}
      </StyledInputWrapper>
      {isInputDisabled && <label id="disabledMessage">{disabledMessage}</label>}
    </StyledSpan>
  );
};

export default InputWrapper;
