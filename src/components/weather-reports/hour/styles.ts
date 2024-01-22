import styled from "styled-components";
import { HTMLProps } from "react";

export const HourContainer = styled.div<HTMLProps<HTMLDivElement>>`
  padding: 24px;

  & > p {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    text-wrap: nowrap;
    color: ${(props) => props.theme.colors.primaryText};
  }

  & > img {
    width: 30px;
    margin: 6px 0;
  }
`;

export const HourPeriod = styled.span<HTMLProps<HTMLSpanElement>>`
  font-size: 10px;
  font-weight: normal;
  vertical-align: top;
  color: ${(props) => props.theme.colors.primaryText};
`;
