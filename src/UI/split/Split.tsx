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
  width?: string;
}

const Split = styled.div<PropsWithChildren<SplitProps>>`
  display: grid;
  width: ${({ width = "auto" }) => width};
  gap: ${({ gap = "xs" }) => spaceSchema[gap]};
  grid-template-columns: ${({ fraction = "1/2" }) => fractionsSchema[fraction]};
`;

Split.displayName = "Split";

export default Split;
