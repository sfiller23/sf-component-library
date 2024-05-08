import { styled } from "styled-components";

const Column = styled.div<{ $span: number }>`
  grid-column: span min(${({ $span = 1 }) => $span}, var(--columns)) / auto;
`;

// const Column = () => {
//   return (
//       <StyledColumn $span={2} />
//   );
// };

export default Column;
