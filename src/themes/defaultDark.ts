import type { Theme } from "./types";

//   --n-color-border: rgb(47, 52, 60);
//   --n-color-border-strong: rgb(61, 67, 77);
//   --n-color-surface: rgb(29, 32, 37);
//   --n-color-surface-raised: rgb(34, 37, 43);
//   --n-color-overlay: rgba(9, 10, 12, 0.5);
//   --n-color-status-neutral: rgb(89, 86, 93);
//   --n-color-status-warning: rgb(203, 158, 42);
//   --n-color-status-highlight: rgb(106, 57, 167);
//   --n-color-status-danger: rgb(142, 63, 47);
//   --n-color-status-success: rgb(68, 103, 50);
//   --n-color-status-info: rgb(42, 70, 157);
//   --n-color-status-progress: rgb(0, 107, 112);
//   --n-color-status-neutral-weak: rgb(59, 59, 59);
//   --n-color-status-warning-weak: rgb(83, 76, 29);
//   --n-color-status-highlight-weak: rgb(60, 49, 73);
//   --n-color-status-danger-weak: rgb(92, 49, 41);
//   --n-color-status-success-weak: rgb(52, 69, 43);
//   --n-color-status-info-weak: rgb(47, 57, 86);
//   --n-color-status-progress-weak: rgb(42, 61, 65);
//   --n-color-button: rgb(29, 32, 37);
//   --n-color-button-hover: rgb(38, 41, 48);
//   --n-color-border-hover: rgb(143, 148, 158);
//   --n-color-icon: rgb(143, 148, 158);
//   --n-color-icon-hover: rgb(222, 223, 225);
//   --n-color-active: rgb(38, 41, 48);
//   --n-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

export const defaultDarkTheme: Theme = {
  /** The screens key allows you to customize the responsive breakpoints in your project. */
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  borderWidth: {
    none: "0",
    xs: "0.1rem",
    s: "0.2rem",
    m: "0.4rem",
  },
  /** The colors key allows you to customize the global color palette for your project. */
  colors: {
    text: "rgb(222, 223, 225)",
    accent: "rgb(42, 70, 157)",
    textLink: "rgb(92, 130, 245)",
    "text-weak": "rgb(222, 223, 225)",
    "text-weaker": "rgb(143, 148, 158)",
    "text-weakest": "rgb(85, 89, 98)",
    "text-on-accent": "rgb(255, 255, 255)",
    "text-error": "rgb(224, 129, 108)",
    "text-success": "rgb(139, 176, 120)",
    "nav-surface": "rgb(38, 41, 48)",
    "nav-heading": "rgb(155, 155, 155)",
    "nav-hover": "rgb(44, 49, 58)",
    border: "rgb(216, 222, 228)",
    "border-strong": "rgb(188, 197, 204)",
    surface: "rgb(255, 255, 255)",
    background: "rgb(24, 27, 32)",
    "surface-raised": "rgb(250, 251, 251)",
    overlay: "rgba(144, 152, 152, 0.4)",
    "status-neutral": "rgb(114, 110, 119)",
    "status-warning": "rgb(240, 192, 68)",
    "status-highlight": "rgb(125, 73, 193)",
    "status-danger": "rgb(185, 77, 55)",
    "status-success": "rgb(80, 128, 56)",
    "status-info": "rgb(53, 89, 199)",
    "status-progress": "rgb(0, 131, 138)",
    "status-neutral-weak": "rgb(227, 227, 227)",
    "status-warning-weak": "rgb(255, 233, 189)",
    "status-highlight-weak": "rgb(238, 220, 255)",
    "status-danger-weak": "rgb(255, 208, 199)",
    "status-success-weak": "rgb(216, 229, 200)",
    "status-info-weak": "rgb(204, 218, 255)",
    "status-progress-weak": "rgb(196, 240, 242)",
    button: "rgb(255, 255, 255)",
    "button-hover": "rgb(246, 248, 248)",
    "border-hover": "rgb(102, 118, 128)",
    icon: "rgb(102, 118, 128)",
    "icon-hover": "rgb(12, 26, 61)",
    active: "rgb(246, 248, 248)",
    "box-shadow": "0 1px 3px rgba(12, 12, 12, 0.09)",
  },
  fontFamily: {
    openSans: "Open Sans, sans-serif, Arial",
  },
  fontSize: {
    xs: "1rem", // 0.1rem = 1px
    s: "1.2rem",
    m: "1.4rem",
    l: "1.6rem",
    xl: "1.8rem",
    "2xl": "2rem",
    "3xl": "2.4rem",
  },
  fontWeight: {
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    xs: "1.4rem",
    s: "1.7rem",
    m: "1.9rem",
    l: "2.2rem",
    // title3: "2.4rem",
    // title2: "2.6rem",
    // title1: "2.8rem",
    xl: "2.4rem",
    "2xl": "2.6rem",
    "3xl": "2.8rem",
  },
  width: {
    pageMin: "320px",
    pageMax: "1066px",
  },
  borderRadius: {
    none: "0",
    xs: "0.4rem",
    s: "0.8rem",
    m: "1.6rem",
    l: "2.4rem",
    full: "100%",
  },
  boxShadow: {
    none: "none",
    normal:
      "0 -1px 4px 0 rgba(26, 26, 26, 0.08), 0 4px 8px 0 rgba(26, 26, 26, 0.12)",
    highlighted:
      "0 -1px 8px 0 rgba(26, 26, 26, 0.12), 0 4px 8px 0 rgba(0, 0, 0, 0.14)",
  },
  /** The spacing key allows you to customize the global spacing and sizing scale for your project. */
  spacing: {
    auto: "auto",
    none: "0",
    xs: "0.4rem",
    s: "0.8rem",
    m: "1.6rem",
    l: "2.4rem",
    xl: "3.2rem",
    xxl: "4rem",
  },
  zIndex: {
    hide: -1,
    base: 0,
    raised: 1,
    dropdown: 1000,
    sticky: 1100,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
};
