export type UseCase<I, O> = {
  execute: (props: I) => Promise<O>;
};

export type ErrorType = "ValidationError" | "Error" | "";

export type History = {
  date: Date;
  latitude: string;
  longitude: string;
};

type ColorsProps = {
  background: string;
  black: string;
  white: string;
  gray: string;
  error: string;
  headerBackground: string;
  headerLabel: string;
  primaryButtonBackground: string;
  primaryButtonText: string;
  primaryText: string;
  secondaryText: string;
  tableBorder: string;
  cardBackground: string;
  inputBorder: string;
  inputHoverBorder: string;
  label: string;
  progressHolder: string;
  progressBar: string;
  rangeContainer: string;
  rangeValueBackground: string;
  rangeValueBorder: string;
};

type ImagesProps = {
  backgroundUrl: string;
};

type ShadowsProps = {
  default: string;
  hover: string;
  inputFocus: string;
};

export type ThemeProps = {
  colors: ColorsProps;
  images: ImagesProps;
  shadows: ShadowsProps
  icons: string
};

export type ThemeCollectionProps = {
  [hour: number]: ThemeProps
};
