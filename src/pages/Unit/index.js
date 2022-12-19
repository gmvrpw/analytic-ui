import { Route, Routes } from "react-router-dom";
import * as S from "./styles";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Reports from "./Reports";
import Tracked from "./Tracked";
import Container from "../Container";
import Containers from "./Containers";
import Requests from "./Requests";
import Data from "./Data";

const Unit = () => {
  return (
    <S.Container>
      <Header />
      <S.Page>
        <Navigation />
        <Routes>
          <Route path={"/report"} element={<Reports />} />
          <Route path={"/tracked"} element={<Tracked />} />
          <Route path={"/container/:containerId"} element={<Container />} />
          <Route path={"/container"} element={<Containers />} />
          <Route path={"/requests"} element={<Requests />} />
          <Route path={"/data"} element={<Data />} />
        </Routes>
      </S.Page>
    </S.Container>
  );
};

export default Unit;
