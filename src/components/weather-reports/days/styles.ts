import styled from "styled-components";
import { HTMLProps } from "react";

type RangeValueProps = HTMLProps<HTMLDivElement> & {
  range: string | number;
};

export const DayContainer = styled.div<HTMLProps<HTMLDivElement>>`
  & > div {
    gap: 12px;
    display: flex;
    align-items: center;
  }

  & > p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primaryText};
  }
`;

export const RangeContainer = styled.div<HTMLProps<HTMLDivElement>>`
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.rangeContainer};
  position: relative;
`;

export const RangeValue = styled.div<RangeValueProps>`
  top: -4px;
  left: calc(${(props) => props.range}% - 6px);
  padding: 3px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.rangeValueBackground};
  border: 3px solid ${(props) => props.theme.colors.rangeValueBorder};
  box-shadow: ${(props) => props.theme.shadows.default};
  width: auto;
  position: absolute;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Temperature = styled.span<HTMLProps<HTMLSpanElement>>`
  font-size: 18px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.primaryText};
`;
