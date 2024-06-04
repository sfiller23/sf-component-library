import { ISpaceSchema } from "../../themes/theme";

export interface justifyAlignMap {
  start: string;
  end: string;
  center: string;
  maxSpace?: string;
  midSpace?: string;
  evenSpace?: string;
}

export interface InputErrorProps {
  error: string;
  color?: string;
}

export interface PaddingMarginProps {
  space: `${ISpaceSchema | undefined} ${ISpaceSchema | undefined} ${ISpaceSchema | undefined} ${ISpaceSchema | undefined}`;
}
