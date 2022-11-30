import { createGlobalStyle } from "styled-components";
import DelaGothicOne from "./fonts/DelaGothicOne-Regular.ttf";
import InterBlack from "./fonts/Inter-Black.ttf";
import InterExtraBold from "./fonts/Inter-ExtraBold.ttf";
import InterBold from "./fonts/Inter-Bold.ttf";
import InterSemiBold from "./fonts/Inter-SemiBold.ttf";
import InterMedium from "./fonts/Inter-Medium.ttf";
import InterRegular from "./fonts/Inter-Regular.ttf";
import InterLight from "./fonts/Inter-Light.ttf";
import InterExtraLight from "./fonts/Inter-ExtraLight.ttf";
import InterThin from "./fonts/Inter-Thin.ttf";

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
  @font-face {
    font-family: 'Inter';
    src: url(${InterThin}) format('opentype'),
    url(${InterThin}) format('opentype');
    font-weight: 200;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterExtraLight}) format('opentype'),
    url(${InterExtraLight}) format('opentype');
    font-weight: 200;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterLight}) format('opentype'),
    url(${InterLight}) format('opentype');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('opentype'),
    url(${InterMedium}) format('opentype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterMedium}) format('opentype'),
    url(${InterMedium}) format('opentype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterSemiBold}) format('opentype'),
    url(${InterSemiBold}) format('opentype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterBold}) format('opentype'),
    url(${InterBold}) format('opentype');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterExtraBold}) format('opentype'),
    url(${InterExtraBold}) format('opentype');
    font-weight: 800;
  }
  @font-face {
    font-family: 'Inter';
    src: url(${InterBlack}) format('opentype'),
    url(${InterBlack}) format('opentype');
    font-weight: 900;
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
