import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {},
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
