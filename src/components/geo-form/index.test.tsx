// Seu arquivo de teste
import { describe, test, expect } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import GeoForm from ".";
import { ThemeProvider } from "styled-components";
import { dayTheme } from "../../hooks/use-hour-theme";

describe("GeoForm", () => {
  test("should check if component are correctly rendered", async () => {
    const { getByText } = render(
      <ThemeProvider theme={dayTheme}>
        <GeoForm />
      </ThemeProvider>
    );
    expect(getByText("Latitude")).toBeTruthy();
    expect(getByText("Longitude")).toBeTruthy();
    expect(getByText("BUSCAR")).toBeTruthy();
  });

  test("should if the component gives feedback on invalid information", async () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider theme={dayTheme}>
        <GeoForm />
      </ThemeProvider>
    );

    fireEvent.input(getByTestId("latitude"), { target: { value: "abc" } });
    fireEvent.input(getByTestId("longitude"), { target: { value: "abc" } });
    fireEvent.click(getByText("BUSCAR"));

    expect(
      getByText("Latitude ou longitude não são números válidos.")
    ).toBeTruthy();
  });
});
