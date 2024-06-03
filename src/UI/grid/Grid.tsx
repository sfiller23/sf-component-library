import { styled } from "styled-components";
import { ISpaceSchema, spaceSchema } from "../../themes/theme";

interface GridProps {
  minItemWidth: string;
  gap?: keyof ISpaceSchema;
}

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ gap = "xs" }) => spaceSchema[gap]};

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.minItemWidth}, 100%), 1fr)
  );
`;

export default Grid;
