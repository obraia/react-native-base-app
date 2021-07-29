import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: 'light' | 'dark';

    colors: {
      primary: string,
      textPrimary: string,
      secondary: string,
      textSecondary: string,
      background: string,
      textBackground: string,
      navbar: string,
      textNavbar: string,
      header: string,
      textHeader: string,
      error: string,
      textError: string,
      warning: string,
      textWarning: string,
      info: string,
      textInfo: string,
      success: string,
      textSuccess: string,
      color1: string;
      color2: string;
      color3: string;
      color4: string;
      color5: string;
    };

    metrics: {
      padding: number;
      margin: number;
      radius: number,
      innerRadius: number,
    };
  }
}
