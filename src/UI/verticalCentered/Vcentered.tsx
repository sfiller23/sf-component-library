import { PropsWithChildren } from "react";
import { styled } from "styled-components";
import { spaceSchema } from "../../utils/theme";

interface VcenteredAttrsProps {
  top?: React.ReactNode;
  bottom?: React.ReactNode;
}

interface VcenteredProps {
  minHeight?: string;
  gutter?: keyof typeof spaceSchema | keyof (typeof spaceSchema)[];
}

const Vcentered = styled.div.attrs(
  ({ children, top, bottom }: PropsWithChildren<VcenteredAttrsProps>) => {
    return {
      children: (
        <>
          {top && <div>{top}</div>}
          <div data-cover-child>{children}</div>
          {bottom && <div>{bottom}</div>}
        </>
      ),
    };
  },
)<VcenteredProps & VcenteredAttrsProps>`
  display: grid;
  gap: ${({ gutter = "l" }) => spaceSchema[gutter as keyof typeof spaceSchema]};
  min-block-size: ${(props) => props.minHeight ?? "100vh"};
  grid-template-rows: ${({ top, bottom }) =>
    top && bottom
      ? "auto 1fr auto"
      : top
        ? "auto 1fr"
        : bottom
          ? "1fr auto"
          : "1fr"};

  > [data-cover-child] {
    align-self: center;
  }
`;

export default Vcentered;
