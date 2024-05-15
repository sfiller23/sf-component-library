import { styled } from "styled-components";
import { spaceSchema } from "../../utils/theme";

interface ColumnsProps {
  columns?: number;
  gutter?: keyof typeof spaceSchema;
}

const Columns = styled.div<ColumnsProps>`
  --columns: 2;
  display: grid;
  gap: ${({ gutter = spaceSchema.xs }) => spaceSchema[gutter]};
  grid-template-columns: repeat(2, 1fr);
`;

export default Columns;
