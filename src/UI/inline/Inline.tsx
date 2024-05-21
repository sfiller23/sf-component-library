import { styled } from "styled-components";
import { spaceSchema } from "../../themes/theme";
import { justifyAlignMap, justifyAlignMapObj } from "../../utils/common";

export interface InlineProps {
  gutter?: keyof typeof spaceSchema;
  justify?: keyof justifyAlignMap;
  align?: keyof justifyAlignMap;
  background?: string;
}

const InlineBundle = styled.div<InlineProps>`
  --gutter: ${({ gutter = spaceSchema.xs }) => spaceSchema[gutter]};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  background-color: ${({ background = "transparent" }) => background};

  justify-content: ${({ justify = justifyAlignMapObj.evenly }) =>
    justifyAlignMapObj[justify as keyof typeof justifyAlignMapObj]};

  align-items: ${({ align = justifyAlignMapObj.center }) =>
    justifyAlignMapObj[align as keyof typeof justifyAlignMapObj]};
`;

export default InlineBundle;
