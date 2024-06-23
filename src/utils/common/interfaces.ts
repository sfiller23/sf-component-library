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

type OneSpaceValue = ISpaceSchema;

type TwoSpaceValue = `${OneSpaceValue} ${OneSpaceValue}`;

type ThreeSpaceValue = `${TwoSpaceValue} ${OneSpaceValue}`;

type FourSpaceValue = `${ThreeSpaceValue} ${OneSpaceValue}`;

export interface PaddingMarginProps {
  space?: FourSpaceValue;
}
