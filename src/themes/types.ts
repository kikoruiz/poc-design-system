export type Theme = {
  screens: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    "2xl": string;
  };
  borderWidth: {
    none: string;
    xs: string;
    s: string;
    m: string;
  };
  colors: {
    text: string;
    accent: string;
    textLink: string;
    "text-weak": string;
    "text-weaker": string;
    "text-weakest": string;
    "text-on-accent": string;
    "text-error": string;
    "text-success": string;
    "nav-surface": string;
    "nav-heading": string;
    "nav-hover": string;
    border: string;
    "border-strong": string;
    surface: string;
    background: string;
    "surface-raised": string;
    overlay: string;
    "status-neutral": string;
    "status-warning": string;
    "status-highlight": string;
    "status-danger": string;
    "status-success": string;
    "status-info": string;
    "status-progress": string;
    "status-neutral-weak": string;
    "status-warning-weak": string;
    "status-highlight-weak": string;
    "status-danger-weak": string;
    "status-success-weak": string;
    "status-info-weak": string;
    "status-progress-weak": string;
    button: string;
    "button-hover": string;
    "border-hover": string;
    icon: string;
    "icon-hover": string;
    active: string;
    "box-shadow": string;
  };
  fontFamily: {
    openSans: string;
  };
  fontSize: {
    xs: string; // 0.1rem = 1px
    s: string;
    m: string;
    l: string;
    // title3: string;
    // title2: string;
    // title1: string;
    xl: string;
    "2xl": string;
    "3xl": string;
  };
  fontWeight: {
    regular: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    xs: string;
    s: string;
    m: string;
    l: string;
    // title3: string;
    // title2: string;
    // title1: string;
    xl: string;
    "2xl": string;
    "3xl": string;
  };
  width: {
    pageMin: string;
    pageMax: string;
  };
  borderRadius: {
    none: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    full: string;
  };
  boxShadow: {
    none: string;
    normal: string;
    highlighted: string;
  };
  spacing: {
    auto: string;
    none: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  zIndex: {
    hide: number;
    base: number;
    raised: number;
    dropdown: number;
    sticky: number;
    overlay: number;
    modal: number;
    popover: number;
    skipLink: number;
    toast: number;
    tooltip: number;
  };
};
