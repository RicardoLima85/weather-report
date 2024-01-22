import { HTMLProps } from "react";
import styled from "styled-components";

export const Progress = styled.div<HTMLProps<HTMLDivElement>>`
  position: relative;
  height: 4px;
  display: block;
  width: 100%;
  background-color: #acece6;
  margin: 0.5rem 0 1rem 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.holder};
`;

export const Indeterminated = styled.div<HTMLProps<HTMLDivElement>>`
  background-color: ${(props) => props.theme.colors.progressBar};
  &:before {
    content: "";
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: indeterminate 2.1s
      cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)
      infinite;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: indeterminate-short 2.1s
      cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)
      infinite;
    -webkit-animation-delay: 1.15s;
    animation-delay: 1.15s;
  }

  @-webkit-keyframes indeterminate {
    0% {
      left: -35%;
      right: 100%;
    }

    60% {
      left: 100%;
      right: -90%;
    }

    100% {
      left: 100%;
      right: -90%;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -35%;
      right: 100%;
    }

    60% {
      left: 100%;
      right: -90%;
    }

    100% {
      left: 100%;
      right: -90%;
    }
  }
`;
