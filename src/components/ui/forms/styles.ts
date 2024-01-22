import styled from "styled-components";
import { HTMLProps } from "react";

const Form = styled.form<HTMLProps<HTMLFormElement>>`
  gap: 12px;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  & > button {
    align-self: self-end;
  }
  & > div {
    flex: 1;
  }
`;

const InputField = styled.div<HTMLProps<HTMLDivElement>>`
`;

const Input = styled.input<HTMLProps<HTMLInputElement>>`
  padding: 0;
  width: 100%;
  height: 3rem;
  font-size: 16px;
  border-radius: 0;
  line-height: 1.15;
  transition-duration: 300ms;
  color: ${(props) => props.theme.colors.primaryText};
  border: none;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  border-bottom: 1px solid ${(props) => props.theme.colors.inputBorder};

  &:active,
  &:focus,
  &:hover {
    box-shadow: ${(props) => props.theme.shadows.inputFocus};
    border-bottom: 1px solid ${(props) => props.theme.colors.inputHoverBorder};
  }

  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`;

const Label = styled.label<HTMLProps<HTMLLabelElement>>`
  font-size: 1rem;
  transition-duration: 300ms;
  text-align: initial;
  cursor: text;
  color: ${(props) => props.theme.colors.label};
`;

const Error = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.error};
`;

export const Forms = {
  Form,
  InputField,
  Input,
  Label,
  Error,
};
