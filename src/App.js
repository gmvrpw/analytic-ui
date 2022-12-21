import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Unit from "./pages/Unit";
import Units from "./pages/Units";

const App = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <Router>
        <Routes>
          <Route path={"/unit"} element={<Units />} />
          <Route path={"/unit/:unitId/*"} element={<Unit />} />
          <Route path={"/"} element={<Index />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
