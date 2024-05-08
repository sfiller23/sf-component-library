import { styled } from "styled-components";
import { SpaceSchemaProps, spaceSchema } from "../../utils/theme";

const Layers = styled.div<SpaceSchemaProps>`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
`;

export default Layers;
