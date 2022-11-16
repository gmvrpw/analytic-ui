import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    header: {
      height: "4rem",
      background: "white",
    },
  },
  dark: {},
};

export const constants = {};

const GlobalStyle = createGlobalStyle`
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
