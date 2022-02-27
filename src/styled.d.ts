import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        dark: string;
        darkGrey: string;
        lightGrey: string;
        lightestGrey: string;
        white: string;
        purple: string;
      };
    };
  }
}
