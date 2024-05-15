import { Children, PropsWithChildren } from "react";
import { styled } from "styled-components";
import { spaceSchema } from "../../themes/theme";

interface ColumnsProps {
  gutter?: keyof typeof spaceSchema;
  evenly?: boolean;
}

const Columns = styled.div<PropsWithChildren<ColumnsProps>>`
  --columns: ${({ children }) => Children.count(children)};
  --pattern: ${({ evenly = true }) => (evenly ? "1fr" : "auto")};
  display: grid;
  gap: ${({ gutter = spaceSchema.xs }) => spaceSchema[gutter]};
  grid-template-columns: repeat(var(--columns), var(--pattern));
`;

export default Columns;
