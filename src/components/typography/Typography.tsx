import { styled } from "styled-components";

export interface TypographyProps {
  children: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
  color?: string;
  size?: `${number}rem`;
  weight?: number;
  spacing?: string;
}

const StyledTypography = styled.p<TypographyProps>`
  color: ${({ color = "black" }) => color};
  font-size: ${({ size = "1rem" }) => size};
  font-weight: ${({ weight = 400 }) => weight};
  letter-spacing: ${({ spacing = "0" }) => spacing};
`;

const Typography = (props: TypographyProps) => {
  const { children, as = "p" } = props;
  return <StyledTypography as={as}>{children}</StyledTypography>;
};

export default Typography;
