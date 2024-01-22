import styled from "styled-components";
import { HTMLProps } from "react";

const Primary = styled.button<HTMLProps<HTMLButtonElement>>`
  outline: 0;
  height: 36px;
  font-size: 14px;
  padding: 0 16px;
  line-height: 36px;
  border-radius: 2px;
  letter-spacing: 0.5px;
  transition-duration: 300ms;
  color: ${(props) => props.theme.colors.primaryButtonText};
  border: none;
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => props.theme.colors.primaryButtonBackground};
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shadows.default};

  &:hover {
    box-shadow: ${(props) => props.theme.shadows.hover};
  }
`;

const Hollow = styled(Primary)`
  padding: 8px;
  height: 40px;
  border-radius: 100%;
  border: none;
  background-color: transparent;
`;

export const Button = {
  Primary,
  Hollow
};
