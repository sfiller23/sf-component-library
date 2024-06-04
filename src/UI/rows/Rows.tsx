import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { ISpaceSchema, spaceSchema } from "../../themes/theme";
import { justifyAlignMap, justifyAlignMapObj } from "../../utils/common";

interface RowsProps {
  gap?: ISpaceSchema;
  justify?: keyof justifyAlignMap;
  align?: keyof justifyAlignMap;
}

const Rows = styled.div<PropsWithChildren<RowsProps>>`
  display: grid;
  justify-items: ${({ justify = "center" }) => justifyAlignMapObj[justify]};
  align-content: ${({ align = "center" }) => justifyAlignMapObj[align]};
  gap: ${({ gap = "xs" }) => spaceSchema[gap]};
`;

export default Rows;
