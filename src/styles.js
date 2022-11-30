import { createGlobalStyle } from "styled-components";
import DelaGothicOne from "./fonts/DelaGothicOne-Regular.ttf";

export const theme = {
  light: {
    header: {
      height: "4rem",
      background: "white",
    },
    navigation: {
      color: "#000",
      active: {
        color: "#000",
        background: "white",
      },
    },
  },
  dark: {},
};

export const constants = {};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Dela Gothic One';
    src: url(${DelaGothicOne}) format('opentype'),
    url(${DelaGothicOne}) format('opentype');
  }
  html, body {
    padding: 0;
    margin: 0;
    border: 0;
    font-family: 'Inter', sans-serif !important;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
