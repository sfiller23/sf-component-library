import React from "react";
import { styled } from "styled-components";

interface MediaWrapperProps {
  ratio?: [number, number];
}

const MediaWrapper: React.FC<MediaWrapperProps> = styled.div<MediaWrapperProps>`
  --n: ${(props) => (props.ratio ? props.ratio[0] : 1)};
  --d: ${(props) => (props.ratio ? props.ratio[1] : 1)};

  ${(props) =>
    props.ratio &&
    `
    aspect-ratio: var(--n) / var(--d);
    @supports not (aspect-ratio: 1/1) {
        padding-block-end: calc(var(--d) / var(--n) * 100%);
    }
    `}
`;

export default MediaWrapper;
