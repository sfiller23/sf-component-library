import { styled } from "styled-components";

const Column = styled.div<{ $span?: number }>`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns)) / auto;
`;

export default Column;
