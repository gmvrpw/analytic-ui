import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./styles";
import Index from "./pages/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Unit from "./pages/Unit";

const App = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <Router>
        <Routes>
          <Route path={"/unit/:id/*"} element={<Unit />} />
          <Route path={"/"} element={<Index />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
