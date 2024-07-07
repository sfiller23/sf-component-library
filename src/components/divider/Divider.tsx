import { styled } from "styled-components";

interface IDividerProps {
  width?: string;
  color?: string;
}

const Divider = styled.hr<IDividerProps>`
  width: ${({ width = "100%" }) => width};
  border-style: solid;
  border-color: ${({ color = "lightGrey" }) => color};
  border-width: 1px 0 0 0;
`;

export default Divider;
