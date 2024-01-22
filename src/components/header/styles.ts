import styled from "styled-components";
import { Paper } from "../ui/card/styles";

export const Header = styled(Paper.Holder)`
  background-color: ${(props) => props.theme.colors.headerBackground} !important;
`;
