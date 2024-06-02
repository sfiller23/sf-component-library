import styled from "styled-components";
import { justifyAlignMap, justifyAlignMapObj } from "../../utils/common";

export interface ButtonProps {
  background?: string;
  radius?: string;
  color?: string;
  gap?: string;
  justify?: keyof justifyAlignMap;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ justify = "evenly" }) => justifyAlignMapObj[justify]};
  gap: ${({ gap = "10px" }) => gap};
  background-color: ${({ background = "blue" }) => background};
  border-radius: ${({ radius = "10px" }) => radius};
  color: ${({ color = "white" }) => color};

  img {
    width: auto !important;
  }
`;

export default Button;
