import { styled } from "styled-components";

export interface HcenteredProps {
  maxWidth?: string;
  centerText?: boolean;
  centerChildren?: boolean;
  background?: string;
}

const Hcentered = styled.div<HcenteredProps>`
  box-sizing: content-box;
  margin-inline-start: auto;
  margin-inline-end: auto;
  background-color: ${({ background = "transparent" }) => background};

  max-inline-size: ${({ maxWidth = "100%" }) => maxWidth};

  ${({ centerText = false }) => centerText && "text-align: center;"}
  ${({ centerChildren = true }) =>
    centerChildren &&
    `
  display: flex;
  flex-direction: column;
  align-items: center;
  `}
`;

Hcentered.displayName = "Hcentered";

export default Hcentered;
