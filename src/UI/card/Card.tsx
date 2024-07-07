import {
  Children,
  PropsWithChildren,
  ReactElement,
  isValidElement,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { styled } from "styled-components";

export interface ICardProps {
  background?: string;
  radius?: string;
  imageWidth?: string;
  bottomButtonEffect?: boolean;
  width?: string;
  borderColor?: string;
  borderWidth?: string;
  onClick?: () => void;
}

const StyledCard = styled.div<ICardProps>`
  background-color: ${({ background = "blue" }) => background};
  border-radius: ${({ radius = "10px" }) => radius};
  width: ${({ width = "100%" }) => width};
  border-color: ${({ borderColor = "lightgrey" }) => borderColor};
  border-width: ${({ borderWidth = "1px" }) => borderWidth};

  img {
    width: ${({ imageWidth = "30%" }) => imageWidth};
    object-fit: cover;
    border-radius: ${({ radius = "10px" }) => radius};
  }

  button {
    border-radius: ${({ radius = "10px" }) => radius};
    height: fit-content;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Card = (props: PropsWithChildren<ICardProps>) => {
  const { children, bottomButtonEffect = true, ...otherProps } = props;

  const [StyledDivHeight, setStyledDivHeight] = useState(0);

  const StyledDivRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (StyledDivRef.current) {
      setStyledDivHeight(Math.floor(StyledDivRef.current.clientHeight / 2));
    }
  }, [StyledDivRef]);

  const button = Children.toArray(children).find(
    (child) =>
      isValidElement(child) &&
      (child.type === "button" ||
        (typeof child.type === "object" &&
          "target" in child.type &&
          child.type["target"] === "button")),
  ) as ReactElement<HTMLButtonElement> | undefined;

  const childrenWithoutButton = Children.toArray(children).filter(
    (child) =>
      (isValidElement(child) &&
        typeof child.type === "object" &&
        "target" in child.type &&
        child.type["target"] !== "button") ||
      (isValidElement(child) &&
        typeof child.type !== "object" &&
        child.type !== "button"),
  );

  return (
    <StyledCard {...otherProps}>
      {bottomButtonEffect ? childrenWithoutButton : children}
      {bottomButtonEffect && (
        <div style={{ height: `${StyledDivHeight}px` }}>
          <StyledDiv ref={StyledDivRef}>{button}</StyledDiv>
        </div>
      )}
    </StyledCard>
  );
};

export default Card;
