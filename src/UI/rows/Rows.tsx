import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { spaceSchema } from "../../utils/theme";

interface RowsProps {
  gutter?: keyof typeof spaceSchema;
}

const Rows = styled.div<PropsWithChildren<RowsProps>>`
  display: grid;
  gap: ${({ gutter = spaceSchema.l }) => spaceSchema[gutter]};
`;

export default Rows;
