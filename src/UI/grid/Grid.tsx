import { styled } from "styled-components";
import { SpaceSchemaProps, spaceSchema } from "../../utils/theme";

interface minItemWidthProp {
  minItemWidth: `${number}rem`;
}

const Grid = styled.div<SpaceSchemaProps & minItemWidthProp>`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};

  grid-template-columns: repeat(
    auto-fit,
    minmax(min(${(props) => props.minItemWidth}, 100%), 1fr)
  );
`;

export default Grid;
