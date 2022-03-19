import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      header: {
        color: string;
      };
      body: {
        bg: string;
        color: string;
      };
      primary: string;
      link: {
        primary: string;
      };
    };
  }
}
