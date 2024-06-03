import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import {
  IFractionsSchema,
  ISpaceSchema,
  fractionsSchema,
  spaceSchema,
} from "../../themes/theme";

interface SplitProps {
  fraction?: keyof IFractionsSchema;
  gap?: keyof ISpaceSchema;
}

const Split = styled.div<PropsWithChildren<SplitProps>>`
  display: grid;
  gap: ${({ gap = "xs" }) => spaceSchema[gap]};
  grid-template-columns: ${({ fraction = "1/2" }) => fractionsSchema[fraction]};
`;

export default Split;
