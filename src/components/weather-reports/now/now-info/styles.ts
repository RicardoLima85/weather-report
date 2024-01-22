import styled from "styled-components";
import { HTMLProps } from "react";

export const Container = styled.div<HTMLProps<HTMLDivElement>>``;

export const Header = styled.div<HTMLProps<HTMLDivElement>>`
  display: flex;
  font-weight: 600;
  align-items: center;
  color: ${(props) => props.theme.colors.primaryText};
  img {
    width: 18px;
    height: 18px;
  }

  span {
    flex: 1;
    text-align: center;
  }

  @media screen and (max-width: 430px) {
    font-size: 12px;

    img {
      width: 16px;
      height: 16px;
    }

    span {
      flex: 1;
      text-align: center;
    }
  }
`;

export const Footer = styled.div<HTMLProps<HTMLDivElement>>`
  text-align: center;
  color: ${(props) => props.theme.colors.primaryText};
  @media screen and (max-width: 430px) {
    font-size: 12px;
  }
`;
