import { HTMLProps } from "react";
import styled from "styled-components";

export const TableHolder = styled.div<HTMLProps<HTMLDivElement>>`
  overflow-y: auto;
`;

export const Table = styled.table<HTMLProps<HTMLTableElement>>`
  min-width: 100%;
  border-collapse: collapse;
`;

export const Tr = styled.tr<HTMLProps<HTMLTableRowElement>>`
  & > th,
  & > td {
    outline: none;
    padding: 16px;
    text-align: center;
    border-bottom: 1px solid ${(props) => props.theme.colors.tableBorder};
  color: ${(props) => props.theme.colors.primaryText};
  }
`;
