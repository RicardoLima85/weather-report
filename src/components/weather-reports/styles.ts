import styled from "styled-components";
import { HTMLProps } from "react";

export const Container = styled.section<HTMLProps<HTMLDivElement>>`
  gap: 24px;
  height: auto;
  padding-top: 24px;
  grid-template-rows: auto auto;
  grid-template-columns: calc(30% - 12px) calc(70% - 12px);
  display: grid;

  & > .search-card {
    display: flex;
    flex-direction: column;
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }

  & > .main-card {
    display: flex;
    flex-direction: column;
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }

  & > .secondary-card {
    overflow-y: auto;
    grid-row: 2 / 3;
    grid-column: 1 / 2;

    & > div:not(:first-child) {
      margin-top: 12px;
    }
  }

  & > .hourly-forecast {
    grid-row: 3 / 3;
    grid-column: 1 / 3;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    & > .search-card {
      grid-row: 1 / 1;
      grid-column: 1 / 1;
    }

    & > .main-card {
      grid-row: 2 / 2;
      grid-column: 1 / 1;
    }

    & > .secondary-card {
      grid-row: 3 / 3;
      grid-column: 1 / 1;
    }

    & > .hourly-forecast {
      grid-row: 4 / 4;
      grid-column: 1 / 1;
    }
  }
`;

export const HourlyContainer = styled.section<HTMLProps<HTMLDivElement>>`
  display: flex;
  overflow-y: auto;
  text-align: center;
`;
