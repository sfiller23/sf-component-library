import { Children, PropsWithChildren } from "react";
import { styled } from "styled-components";
import { ISpaceSchema, spaceSchema } from "../../themes/theme";

export interface ColumnsProps {
  gap?: ISpaceSchema;
  evenly?: boolean | string;
}

const Columns = styled.div<PropsWithChildren<ColumnsProps>>`
  --columns: ${({ children }) => Children.count(children)};
  --pattern: ${({ evenly = true }) =>
    evenly.toString() === "true" ? "1fr" : "max-content"};
  display: grid;
  gap: ${({ gap = "xs" }) => spaceSchema[gap]};
  grid-template-columns: repeat(var(--columns), var(--pattern));
`;

Columns.displayName = "Columns";

export default Columns;
