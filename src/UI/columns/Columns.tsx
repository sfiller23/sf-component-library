import { styled } from "styled-components";
import { SpaceSchemaProps, spaceSchema } from "../../utils/theme";

const Columns = styled.div<SpaceSchemaProps>`
  --columns: ${({ columns = 1 }) => columns};
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  grid-template-columns: repeat(var(--columns), 1fr);
`;

export default Columns;
