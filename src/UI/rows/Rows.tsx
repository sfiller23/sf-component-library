import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { spaceSchema } from "../../themes/theme";
import { justifyAlignMap, justifyAlignMapObj } from "../../utils/common";

interface RowsProps {
  gutter?: keyof typeof spaceSchema;
  justify?: keyof justifyAlignMap;
  align?: keyof justifyAlignMap;
}

const Rows = styled.div<PropsWithChildren<RowsProps>>`
  display: grid;
  justify-items: ${({ justify = "center" }) => justifyAlignMapObj[justify]};
  align-content: ${({ align = "center" }) => justifyAlignMapObj[align]};
  gap: ${({ gutter = spaceSchema.xs }) => spaceSchema[gutter]};
`;

export default Rows;
