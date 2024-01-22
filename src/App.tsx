import styled from "styled-components";
import "./App.css";
import { HTMLProps } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import NavigatorBar from "./components/ui/navigator-bar";
import PublicRouter from "./routes/public-router";
import { Header } from "./components/header/styles";
import { useHourTheme } from "./hooks/use-hour-theme";

const Container = styled.div<HTMLProps<HTMLDivElement>>`
  display: flex;
  justify-content: center;
  position: relative;
  &.sky {
    background: url(${(props) => props.theme.images.backgroundUrl}) no-repeat
      center center fixed;
    background-size: cover;
    min-height: calc(100vh - 74px);
    animation: moveSky 60s linear infinite;
  }

  * img {
    filter: ${(props) => props.theme.icons}
  }

  @keyframes moveSky {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 0% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

const Content = styled.div<HTMLProps<HTMLDivElement>>`
  width: calc(100% - 48px);
  padding: 24px;
  max-width: calc(1280px + 48px);
`;

const App: React.FC = () => {
  const { theme } = useHourTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header>
          <Container>
            <Content>
              <NavigatorBar />
            </Content>
          </Container>
        </Header>
        <Container className="sky">
          <Content>
            <PublicRouter />
          </Content>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
