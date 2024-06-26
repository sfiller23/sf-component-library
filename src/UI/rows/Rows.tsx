import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { ISpaceSchema, spaceSchema } from "../../themes/theme";
import { justifyAlignMap, justifyAlignMapObj } from "../../utils/common";

export interface RowsProps {
  gap?: ISpaceSchema;
  justify?: keyof justifyAlignMap;
  align?: keyof justifyAlignMap;
  width?: string;
}

const Rows = styled.div<PropsWithChildren<RowsProps>>`
  display: grid;
  width: ${({ width = "auto" }) => width};
  justify-items: ${({ justify = "center" }) => justifyAlignMapObj[justify]};
  align-content: ${({ align = "center" }) => justifyAlignMapObj[align]};
  gap: ${({ gap = "xs" }) => spaceSchema[gap]};
`;

Rows.displayName = "Rows";

export default Rows;
