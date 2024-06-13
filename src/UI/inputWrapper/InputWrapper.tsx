import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { InputErrorProps } from "../../utils/common";

interface InputWrapperProps {
  errorObj?: InputErrorProps;
  labelColor?: string;
  errorColor?: string;
  background?: string;
  color?: string;
  padding?: string;
  borderRadius?: string;
  borderColor?: string;
  borderWidth?: string;
  gap?: string;
}

const StyledInputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap = "0px" }) => gap};

  > * {
    background-color: ${({ background = "white" }) => background};
    color: ${({ color = "black" }) => color};
    padding: ${({ padding = "10px" }) => padding};
    border-radius: ${({ borderRadius = "5px" }) => borderRadius};
    border-color: ${({ borderColor = "black" }) => borderColor};
    border-width: ${({ borderWidth = "1px" }) => borderWidth};
  }
`;

const InputWrapper = (props: PropsWithChildren<InputWrapperProps>) => {
  const { children, errorObj = { error: "none" }, ...otherProps } = props;
  return (
    <>
      <StyledInputWrapper {...otherProps}>{children}</StyledInputWrapper>
      {errorObj.error !== "none" && (
        <p style={{ color: errorObj.color }}>{errorObj.error}</p>
      )}
    </>
  );
};

export default InputWrapper;
