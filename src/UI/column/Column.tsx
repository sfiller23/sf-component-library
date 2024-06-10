import { styled } from "styled-components";

const Column = styled.div<{ $span?: number }>`
  grid-column: span ${({ $span = 1 }) => $span};
`;

Column.displayName = "Column";

export default Column;
