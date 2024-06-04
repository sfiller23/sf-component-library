import { Children, PropsWithChildren } from "react";
import { styled } from "styled-components";
import { ISpaceSchema, spaceSchema } from "../../themes/theme";

export interface ColumnsProps {
  gap?: ISpaceSchema;
  evenly?: boolean;
}

const Columns = styled.div<PropsWithChildren<ColumnsProps>>`
  --columns: ${({ children }) => Children.count(children)};
  --pattern: ${({ evenly = true }) => (evenly ? "1fr" : "auto")};
  display: grid;
  gap: ${({ gap = "xs" }) => spaceSchema[gap]};
  grid-template-columns: repeat(var(--columns), var(--pattern));
`;

export default Columns;
