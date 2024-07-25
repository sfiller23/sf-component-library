import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

type TypographyElementType =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "a"
  | "em"
  | "strong"
  | "blockquote"
  | "pre"
  | "code"
  | typeof Link;
export interface ITypographyProps {
  children: string | IconType;
  as?: TypographyElementType;
  color?: string;
  size?: string;
  weight?: number;
  letterSpacing?: string;
}

const StyledTypography = styled.p<ITypographyProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  letter-spacing: ${(props) => props.letterSpacing};
`;

const Typography = (props: ITypographyProps) => {
  const { children, as = "p", ...otherProps } = props;

  return (
    <StyledTypography as={as} {...otherProps}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
