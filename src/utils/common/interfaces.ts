import { ISpaceSchema } from "../../themes/theme";

export interface justifyAlignMap {
  start: string;
  end: string;
  center: string;
  between: string;
  around: string;
  evenly: string;
}

export interface InputErrorProps {
  error: string;
  color?: string;
}

export interface PaddingMarginProps {
  space: `${keyof ISpaceSchema | undefined} ${keyof ISpaceSchema | undefined} ${keyof ISpaceSchema | undefined} ${keyof ISpaceSchema | undefined}`;
}
