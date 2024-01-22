import styled from "styled-components";
import { HTMLProps } from "react";

export const Container = styled.div<HTMLProps<HTMLDivElement>>`
  flex: 1;
  gap: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div<HTMLProps<HTMLDivElement>>`
  flex: 1;
  display: flex;
  text-align: center;
`;

export const Temperature = styled.div<HTMLProps<HTMLDivElement>>`
  flex: 1;
  display: flex;
  text-align: left;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme.colors.primaryText};

  h1 {
    font-size: 80px;
    font-weight: 600;
    margin: 0;
  }

  span {
    padding: 0 10px;
    font-size: 22px;
    font-weight: 400;

    img {
      width: 18px;
      height: 18px;
      margin: 8px 6px 0 0;
    }
  }

  @media screen and (max-width: 430px) {
    text-align: left;
    h1 {
      font-size: 46px;
    }

    span {
      padding: 0 4px;
      font-size: 18px;

      img {
        width: 18px;
        height: 18px;
        margin: 8px 6px 0 0;
      }
    }
  }
`;

export const Left = styled.div<HTMLProps<HTMLDivElement>>`
  gap: 12px;
  display: flex;
  flex-direction: column-reverse;
`;

export const Bottom = styled.div<HTMLProps<HTMLDivElement>>`
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoHolder = styled.div<HTMLProps<HTMLDivElement>>`
  gap: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  & > * {
    flex: 0 0 calc(30%);
    box-sizing: border-box;
  }
`;
