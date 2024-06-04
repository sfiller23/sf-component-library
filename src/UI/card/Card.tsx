import {
  Children,
  PropsWithChildren,
  ReactElement,
  isValidElement,
} from "react";
import { styled } from "styled-components";

export interface CardProps {
  background?: string;
  radius?: string;
  gap?: string;
  $imgWidth?: string;
  bottomButtonEffect?: boolean;
  width?: string;
}

const StyledCard = styled.div<CardProps>`
  background-color: ${({ background = "blue" }) => background};
  border-radius: ${({ radius = "10px" }) => radius};
  width: ${({ width = "100%" }) => width};

  img {
    width: ${({ $imgWidth = "30%" }) => $imgWidth};
    object-fit: cover;
    border-radius: ${({ radius = "10px" }) => radius};
  }

  button {
    border-radius: ${({ radius = "10px" }) => radius};
  }
`;

const StyledDiv = styled.div<{ $buttonHeight: string }>`
  display: flex;
  justify-content: center;
  height: calc(${({ $buttonHeight }) => $buttonHeight} / 2);
`;

const Card = (props: PropsWithChildren<CardProps>) => {
  const { children, bottomButtonEffect = true, ...otherProps } = props;

  const button = Children.toArray(children).find(
    (child) =>
      isValidElement(child) &&
      (child.type === "button" ||
        (typeof child.type === "object" &&
          "target" in child.type &&
          child.type["target"] === "button")),
  ) as ReactElement<HTMLButtonElement> | undefined;

  const buttonHeight = (button as ReactElement<HTMLButtonElement>)?.props?.style
    ?.height;

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
        <StyledDiv $buttonHeight={buttonHeight}>{button}</StyledDiv>
      )}
    </StyledCard>
  );
};

export default Card;
