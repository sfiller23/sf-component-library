import { styled } from "styled-components";
import { spaceSchema } from "../../themes/theme";

interface justifyAlignMap {
  start: string;
  end: string;
  center: string;
  between: string;
  around: string;
  evenly: string;
}

export interface InlineProps {
  gutter?: keyof typeof spaceSchema;
  justify?: keyof justifyAlignMap;
  align?: keyof justifyAlignMap;
}

const justifyAlignMapObj: justifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const InlineBundle = styled.div<InlineProps>`
  --gutter: ${({ gutter = spaceSchema.xs }) => spaceSchema[gutter]};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${({ justify = justifyAlignMapObj.evenly }) =>
    justifyAlignMapObj[justify as keyof typeof justifyAlignMapObj]};

  align-items: ${({ align = justifyAlignMapObj.center }) =>
    justifyAlignMapObj[align as keyof typeof justifyAlignMapObj]};
`;

export default InlineBundle;
