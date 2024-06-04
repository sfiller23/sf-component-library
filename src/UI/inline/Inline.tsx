import { styled } from "styled-components";
import { ISpaceSchema, spaceSchema } from "../../themes/theme";
import { justifyAlignMap, justifyAlignMapObj } from "../../utils/common";

export interface InlineProps {
  gap?: ISpaceSchema;
  justify?: keyof justifyAlignMap;
  align?: keyof justifyAlignMap;
  background?: string;
}

const InlineBundle = styled.div<InlineProps>`
  --gap: ${({ gap = "xs" }) => spaceSchema[gap]};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);

  background-color: ${({ background = "transparent" }) => background};

  justify-content: ${({ justify = justifyAlignMapObj.center }) =>
    justifyAlignMapObj[justify as keyof typeof justifyAlignMapObj]};

  align-items: ${({ align = justifyAlignMapObj.center }) =>
    justifyAlignMapObj[align as keyof typeof justifyAlignMapObj]};
`;

export default InlineBundle;
