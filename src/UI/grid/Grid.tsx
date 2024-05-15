import { styled } from "styled-components";
import { spaceSchema } from "../../utils/theme";

interface GridProps {
  minItemWidth: string;
  gutter?: keyof typeof spaceSchema;
}

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ gutter = spaceSchema.xs }) => spaceSchema[gutter]};

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.minItemWidth}, 100%), 1fr)
  );
`;

export default Grid;
