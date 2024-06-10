import { styled } from "styled-components";
import { ISpaceSchema, spaceSchema } from "../../themes/theme";
import { justifyAlignMap, justifyAlignMapObj } from "../../utils/common";

export interface InlineProps {
  gap?: ISpaceSchema;
  justify?: keyof justifyAlignMap;
  align?: keyof justifyAlignMap;
  background?: string;
}

const Inline = styled.div<InlineProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap = "xs" }) => spaceSchema[gap]};

  background-color: ${({ background = "transparent" }) => background};

  justify-content: ${({ justify = justifyAlignMapObj.center }) =>
    justifyAlignMapObj[justify as keyof typeof justifyAlignMapObj]};

  align-items: ${({ align = justifyAlignMapObj.center }) =>
    justifyAlignMapObj[align as keyof typeof justifyAlignMapObj]};
`;

Inline.displayName = "Inline";

export default Inline;
