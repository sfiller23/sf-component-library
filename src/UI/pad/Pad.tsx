import { styled } from "styled-components";
import { ISpaceSchema, spaceSchema } from "../../themes/theme";
import { PaddingMarginProps } from "../../utils/common";

const Pad = styled.div<PaddingMarginProps & { width?: string }>`
  width: ${({ width = "auto" }) => width};
  padding: ${({ space = "xs" }) => {
    return String(space)
      .split(" ")
      .map((padKey) => spaceSchema[padKey as ISpaceSchema])
      .join(" ");
  }};
`;

Pad.displayName = "Pad";

export default Pad;
