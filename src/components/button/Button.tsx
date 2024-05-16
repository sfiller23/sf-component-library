import { PropsWithChildren } from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  backGroundColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ backGroundColor = "white" }) => backGroundColor};
`;

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { onClick, disabled = false, children } = props;
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
