import { styled } from "styled-components";
import { SpaceSchemaProps, spaceSchema } from "../../utils/theme";

interface justifyAlignMap {
  start: string;
  end: string;
  center: string;
}

interface InlineProps {
  gutter?: keyof SpaceSchemaProps;
  justify: keyof justifyAlignMap;
  align: keyof justifyAlignMap;
}

const justifyAlignMapObj: justifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

const InlineBundle = styled.div<InlineProps>`
  --gutter: ${({ gutter = spaceSchema.l }) => spaceSchema[gutter]};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifyAlignMapObj[props.justify] ?? justifyAlignMapObj.start};

  align-items: ${(props) =>
    justifyAlignMapObj[props.align] ?? justifyAlignMapObj.start};
`;

export default InlineBundle;
