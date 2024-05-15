import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { fractionsSchema, spaceSchema } from "../../utils/theme";

interface SplitProps {
  fraction?: keyof typeof fractionsSchema;
  gutter?: keyof typeof spaceSchema;
}

const Split = styled.div<PropsWithChildren<SplitProps>>`
  display: grid;
  gap: ${({ gutter = spaceSchema.xs }) => spaceSchema[gutter]};
  grid-template-columns: ${({ fraction = fractionsSchema["1/2"] }) =>
    fractionsSchema[fraction]};
`;

export default Split;
