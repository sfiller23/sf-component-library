import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import {
  IFractionsSchema,
  ISpaceSchema,
  fractionsSchema,
  spaceSchema,
} from "../../themes/theme";

export interface SplitProps {
  fraction?: keyof IFractionsSchema;
  gap?: ISpaceSchema;
}

const Split = styled.div<PropsWithChildren<SplitProps>>`
  display: grid;
  gap: ${({ gap = "xs" }) => spaceSchema[gap]};
  grid-template-columns: ${({ fraction = "1/2" }) => fractionsSchema[fraction]};
`;

Split.displayName = "Split";

export default Split;
