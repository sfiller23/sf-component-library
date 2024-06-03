export interface ITheme {
  spaceSchema: typeof spaceSchema;
  fractionsSchema: IFractionsSchema;
}

// The SpaceSchema interface is used for margins, paddings, and other gaps.

export type SpaceSchemaKeys = "xs" | "s" | "m" | "l" | "xl" | "xxl" | "none";
export const spaceSchema: Record<SpaceSchemaKeys, `${number}rem`> = {
  xs: "0.125rem",
  s: "0.25rem",
  m: "0.5rem",
  l: "1rem",
  xl: "2rem",
  xxl: "4rem",
  none: "0rem",
};

export interface IFractionsSchema {
  "1/4": string;
  "1/3": string;
  "1/2": string;
  "2/3": string;
  "3/4": string;
  "auto-start": string;
  "auto-end": string;
}

export const fractionsSchema: IFractionsSchema = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};

export type ButtonSizes = "small" | "medium" | "large";

export const ButtonSizesObj: Record<ButtonSizes, `${number}rem`> = {
  small: "10rem",
  medium: "15rem",
  large: "20rem",
};

export const theme: ITheme = {
  spaceSchema,
  fractionsSchema,
};
