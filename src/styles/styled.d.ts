import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    radius: {
      standard: string;
      large: string;
      extreme: string;
    };
    spacing: {
      tight: string;
      regular: string;
      double: string;
      sixTimes: string;
    };
    fonts: {
      base: string;
    };
    colors: {
      text: string;
      background: string;
      gradientDark: string;
      gradientLight: string;
      divider: string;
      borderA: string;
      backgroundA: string;
      backgroundAHover: string;
      label: string;
      selected: string;
      error: string;
    };
    typography: {
      button: FlattenSimpleInterpolation;
      header: FlattenSimpleInterpolation;
      base: FlattenSimpleInterpolation;
      label: FlattenSimpleInterpolation;
      input: FlattenSimpleInterpolation;
      quote: FlattenSimpleInterpolation;
      error: FlattenSimpleInterpolation;
    };
  }
}
