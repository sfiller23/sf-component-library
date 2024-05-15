import { styled } from "styled-components";

export interface TypographyProps {
  children: string;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
}

const StyledTypography = styled.p<TypographyProps>``;

const Typography = (props: TypographyProps) => {
  const { children, as = "p" } = props;
  return <StyledTypography as={as}>{children}</StyledTypography>;
};

export default Typography;
