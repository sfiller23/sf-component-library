import { styled } from "styled-components";
import { spaceSchema } from "../../utils/theme";

interface ColumnsProps {
  columns: number;
  gutter?: keyof typeof spaceSchema;
}

const Columns = styled.div<ColumnsProps>`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${({ gutter = spaceSchema.l }) => spaceSchema[gutter]};
  grid-template-columns: repeat(var(--columns), 1fr);
`;

export default Columns;
