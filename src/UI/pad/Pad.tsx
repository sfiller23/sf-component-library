import { styled } from "styled-components";
import { spaceSchema } from "../../themes/theme";

interface PaddingProps {
  padding: keyof typeof spaceSchema | keyof (typeof spaceSchema)[];
}

const Pad = styled.div<PaddingProps>`
  padding: ${(props) => {
    return [String(props.padding)]
      .map((padKey) => spaceSchema[padKey])
      .join(" ");
  }};
`;

export default Pad;
