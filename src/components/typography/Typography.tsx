import { styled } from "styled-components";

interface TypographyProps {
  children: string;
  size?: `${number}rem`;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7";
}

const StyledTypography = styled.p<TypographyProps>`
  font-size: ${(props) => props.size ?? "auto"};
`;

const Typography = (props: TypographyProps) => {
  const { children, size, as = "p" } = props;
  return (
    <StyledTypography as={as} size={size}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
