import styled from "styled-components";
import { HTMLProps } from "react";

export const Container = styled.section<HTMLProps<HTMLDivElement>>`
  text-align: center;
`;

export const Timer = styled.section<HTMLProps<HTMLDivElement>>`
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Today = styled.section<HTMLProps<HTMLDivElement>>`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.primaryText};
`;
