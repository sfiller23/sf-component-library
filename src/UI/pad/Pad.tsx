import { styled } from "styled-components";
import { ISpaceSchema, spaceSchema } from "../../themes/theme";
import { PaddingMarginProps } from "../../utils/common";

const Pad = styled.div<PaddingMarginProps>`
  padding: ${(props) => {
    return props.space
      .split(" ")
      .map((padKey) => spaceSchema[padKey as ISpaceSchema])
      .join(" ");
  }};
`;

export default Pad;
