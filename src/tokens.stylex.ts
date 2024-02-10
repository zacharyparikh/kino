import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

export const tokens = stylex.defineVars({
  // Primary
  primary: { default: "rgb(59 96 143)", [DARK]: "rgb(165 200 254)" },
  surfaceTint: { default: "rgb(59 96 143)", [DARK]: "rgb(165 200 254)" },
  onPrimary: { default: "rgb(255 255 255)", [DARK]: "rgb(0 49 93)" },
  primaryContainer: { default: "rgb(212 227 255)", [DARK]: "rgb(33 72 118)" },
  onPrimaryContainer: { default: "rgb(0 28 58)", [DARK]: "rgb(212 227 255)" },

  // Secondary
  secondary: { default: "rgb(84 95 113)", [DARK]: "rgb(188 199 220)" },
  onSecondary: { default: "rgb(255 255 255)", [DARK]: "rgb(38 49 65)" },
  secondaryContainer: { default: "rgb(216 227 248)", [DARK]: "rgb(61 71 88)" },
  onSecondaryContainer: {
    default: "rgb(17 28 43)",
    [DARK]: "rgb(216 227 248)",
  },

  // Tertiary
  tertiary: { default: "rgb(109 86 118)", [DARK]: "rgb(217 189 226)" },
  onTertiary: { default: "rgb(255 255 255)", [DARK]: "rgb(61 41 70)" },
  tertiaryContainer: { default: "rgb(246 217 255)", [DARK]: "rgb(84 63 94)" },
  onTertiaryContainer: { default: "rgb(39 20 48)", [DARK]: "rgb(246 217 255)" },

  // Error
  error: { default: "rgb(186 26 26)", [DARK]: "rgb(255 180 171)" },
  onError: { default: "rgb(255 255 255)", [DARK]: "rgb(105 0 5)" },
  errorContainer: { default: "rgb(255 218 214)", [DARK]: "rgb(147 0 10)" },
  onErrorContainer: { default: "rgb(65 0 2)", [DARK]: "rgb(255 218 214)" },

  // Background
  background: { default: "rgb(249 249 255)", [DARK]: "rgb(17 19 24)" },
  onBackground: { default: "rgb(25 28 32)", [DARK]: "rgb(225 226 233)" },

  // Surface
  surface: { default: "rgb(249 249 255)", [DARK]: "rgb(17 19 24)" },
  onSurface: { default: "rgb(25 28 32)", [DARK]: "rgb(225 226 233)" },
  surfaceVariant: { default: "rgb(223 226 235)", [DARK]: "rgb(67 71 78)" },
  onSurfaceVariant: { default: "rgb(67 71 78)", [DARK]: "rgb(195 198 207)" },
  outline: { default: "rgb(115 119 127)", [DARK]: "rgb(141 145 153)" },
  outlineVariant: { default: "rgb(195 198 207)", [DARK]: "rgb(67 71 78)" },
  shadow: { default: "rgb(0 0 0)", [DARK]: "rgb(0 0 0)" },
  scrim: { default: "rgb(0 0 0)", [DARK]: "rgb(0 0 0)" },
  inverseSurface: { default: "rgb(46 48 53)", [DARK]: "rgb(225 226 233)" },
  inverseOnSurface: { default: "rgb(240 240 247)", [DARK]: "rgb(46 48 53)" },
  inversePrimary: { default: "rgb(165 200 254)", [DARK]: "rgb(59 96 143)" },
  primaryFixed: { default: "rgb(212 227 255)", [DARK]: "rgb(212 227 255)" },
  onPrimaryFixed: { default: "rgb(0 28 58)", [DARK]: "rgb(0 28 58)" },
  primaryFixedDim: { default: "rgb(165 200 254)", [DARK]: "rgb(165 200 254)" },
  onPrimaryFixedVariant: {
    default: "rgb(33 72 118)",
    [DARK]: "rgb(33 72 118)",
  },
  secondaryFixed: { default: "rgb(216 227 248)", [DARK]: "rgb(216 227 248)" },
  onSecondaryFixed: { default: "rgb(17 28 43)", [DARK]: "rgb(17 28 43)" },
  secondaryFixedDim: {
    default: "rgb(188 199 220)",
    [DARK]: "rgb(188 199 220)",
  },
  onSecondaryFixedVariant: {
    default: "rgb(61 71 88)",
    [DARK]: "rgb(61 71 88)",
  },
  tertiaryFixed: { default: "rgb(246 217 255)", [DARK]: "rgb(246 217 255)" },
  onTertiaryFixed: { default: "rgb(39 20 48)", [DARK]: "rgb(39 20 48)" },
  tertiaryFixedDim: { default: "rgb(217 189 226)", [DARK]: "rgb(217 189 226)" },
  onTertiaryFixedVariant: { default: "rgb(84 63 94)", [DARK]: "rgb(84 63 94)" },
  surfaceDim: { default: "rgb(217 218 224)", [DARK]: "rgb(17 19 24)" },
  surfaceBright: { default: "rgb(249 249 255)", [DARK]: "rgb(55 57 62)" },
  surfaceContainerLowest: {
    default: "rgb(255 255 255)",
    [DARK]: "rgb(12 14 19)",
  },
  surfaceContainerLow: { default: "rgb(242 243 250)", [DARK]: "rgb(25 28 32)" },
  surfaceContainer: { default: "rgb(237 237 244)", [DARK]: "rgb(29 32 36)" },
  surfaceContainerHigh: {
    default: "rgb(231 232 238)",
    [DARK]: "rgb(40 42 47)",
  },
  surfaceContainerHighest: {
    default: "rgb(225 226 233)",
    [DARK]: "rgb(50 53 58)",
  },
});
