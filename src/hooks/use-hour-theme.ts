import { useMemo } from "react";
import { ThemeCollectionProps, ThemeProps } from "../types/model-types";
import { DateUtils } from "../utils/date-utils";

type Props = {
  theme: ThemeProps;
};

export const dayTheme: ThemeProps = {
  colors: {
    background: "#5272ad",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#9E9E9E",
    error: "#7f1d1d",
    headerBackground: "#5272ad",
    headerLabel: "#FFFFFF",
    primaryButtonBackground: "#5272ad",
    primaryButtonText: "#FFFFFF",
    primaryText: "#000000",
    secondaryText: "#000000",
    tableBorder: "#000000",
    cardBackground: "#FFFFFF60",
    inputBorder: "#9E9E9E",
    inputHoverBorder: "#000000",
    label: "#000000",
    progressHolder: "#9E9E9E",
    progressBar: "#5272ad",
    rangeContainer: "#FFFFFF",
    rangeValueBackground: "#FFFFFF",
    rangeValueBorder: "#5272ad",
  },
  images: {
    backgroundUrl: "/clean-sky.jpg",
  },
  shadows: {
    default:
      "0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);",
    hover:
      "0 3px 3px 0 rgba(0,0,0,0.14), 0 1px 7px 0 rgba(0,0,0,0.12), 0 3px 1px -1px rgba(0,0,0, 0.2);",
    inputFocus: "0 1px 0 0 #000000;",
  },
  icons: "none",
};

const afternoonTheme: ThemeProps = {
  ...dayTheme,
  colors: {
    ...dayTheme.colors,
    error: "#dc2626",
    headerBackground: "#af8e70",
    primaryButtonBackground: "#af8e70",
    rangeValueBorder: "#af8e70",
  },
  images: {
    backgroundUrl: "/afternoon-sky.jpg",
  },
};

const nightTheme: ThemeProps = {
  ...dayTheme,
  colors: {
    ...dayTheme.colors,
    error: "#f87171",
    label: "#FFFFFF",
    primaryText: "#FFFFFF",
    inputHoverBorder: "#FFFFFF",
    cardBackground: "#001c3d60",
    headerBackground: "#001c3d",
    primaryButtonBackground: "#001c3d",
    progressBar: "#001c3d",
  },
  images: {
    backgroundUrl: "/night-sky.jpg",
  },
  shadows: {
    ...dayTheme.shadows,
    default:
      "0 2px 2px 0 rgba(255,255,255,0.14), 0 3px 1px -2px rgba(255,255,255,0.12), 0 1px 5px 0 rgba(255,255,255,0.2);",
    hover:
      "0 3px 3px 0 rgba(255,255,255,0.14), 0 1px 7px 0 rgba(255,255,255,0.12), 0 3px 1px -1px rgba(255,255,255,0.2);",
  },
  icons: "invert(1) sepia(1) saturate(5) hue-rotate(200deg);",
};

const dawnTheme: ThemeProps = {
  ...nightTheme,
  images: {
    backgroundUrl: "/dawn-sky.jpg",
  },
};

const themeByHour: ThemeCollectionProps = {
  0: dawnTheme,
  1: dawnTheme,
  2: dawnTheme,
  3: dawnTheme,
  4: dawnTheme,
  5: dawnTheme,
  6: dayTheme,
  7: dayTheme,
  8: dayTheme,
  9: dayTheme,
  10: dayTheme,
  11: dayTheme,
  12: dayTheme,
  13: dayTheme,
  14: afternoonTheme,
  15: afternoonTheme,
  16: afternoonTheme,
  17: afternoonTheme,
  18: afternoonTheme,
  19: nightTheme,
  20: nightTheme,
  21: nightTheme,
  22: nightTheme,
  23: nightTheme,
};

export const useHourTheme = (): Props => {
  const theme = useMemo(() => {
    const number = Number(DateUtils.getHour(new Date()));
    return themeByHour[number];
  }, []);
  return { theme: theme || dayTheme };
};
