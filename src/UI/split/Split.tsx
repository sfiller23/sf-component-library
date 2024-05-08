import { styled } from "styled-components";
import {
  FractionSchemaProps,
  fractionsSchema,
  spaceSchema,
} from "../../utils/theme";

const Split = styled.div<FractionSchemaProps>`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  grid-template-columns: ${({ fraction }) =>
    fractionsSchema[fraction] ?? fractionsSchema["1/2"]};
`;

export default Split;
