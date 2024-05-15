export interface IKeyStringRem {
  [key: string]: `${number}rem`;
}

export const spaceSchema: IKeyStringRem = {
  xs: "0.125rem",
  s: "0.25rem",
  m: "0.5rem",
  l: "1rem",
  xl: "2rem",
  xxl: "4rem",
  none: "0rem",
};

export interface IKeyString {
  [key: string]: string;
}

export const fractionsSchema: IKeyString = {
  "1/4": "1fr 3fr",
  "1/3": "1fr 2fr",
  "1/2": "1fr 1fr",
  "2/3": "2fr 1fr",
  "3/4": "3fr 1fr",
  "auto-start": "auto 1fr",
  "auto-end": "1fr auto",
};
