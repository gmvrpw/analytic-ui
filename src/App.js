import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./styles";
import Index from "./pages/Index";

const App = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <Index />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
