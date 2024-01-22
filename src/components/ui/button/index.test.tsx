// Seu arquivo de teste
import { describe, test, expect } from "vitest";
import { Button } from "./styles";
import { fireEvent, render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { dayTheme } from "../../../hooks/use-hour-theme";

describe("Button.Primary", () => {
  test("should check if the function was called", async () => {
    const mockOnClick = vi.fn();
    const { getByText } = render(
      <ThemeProvider theme={dayTheme}>
        <Button.Primary onClick={mockOnClick}>teste</Button.Primary>
      </ThemeProvider>
    );
    fireEvent.click(getByText("teste"));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
