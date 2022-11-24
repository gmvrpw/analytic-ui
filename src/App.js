import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./styles";
import Index from "./pages/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <Router>
        <Routes>
          <Route path={"/index"}>
            <Index />
          </Route>
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
