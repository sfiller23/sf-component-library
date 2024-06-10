import { styled } from "styled-components";
import { ISpaceSchema, spaceSchema } from "../../themes/theme";

export interface GridColResponsiveProps {
  minItemWidth?: string;
  gap?: ISpaceSchema;
}

const GridColResponsive = styled.div<GridColResponsiveProps>`
  display: grid;
  gap: ${({ gap = "xs" }) => spaceSchema[gap]};

  grid-template-columns: repeat(
    auto-fit,
    minmax(
      min(${({ minItemWidth = "mim-content" }) => minItemWidth}, 100%),
      1fr
    )
  );
`;

GridColResponsive.displayName = "GridColResponsive";

export default GridColResponsive;
