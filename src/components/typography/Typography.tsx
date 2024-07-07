import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface ITypographyElement {
  as:
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
}
export interface ITypographyProps {
  children: string | IconType;
  color?: string;
  size?: string;
  weight?: number;
  letterSpacing?: string;
  as?: ITypographyElement;
}

const StyledTypography = styled.p<ITypographyProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  letter-spacing: ${(props) => props.letterSpacing};
`;

const Typography = (props: ITypographyProps) => {
  const { children, as } = props;

  return <StyledTypography as={as}>{children}</StyledTypography>;
};

export default Typography;
