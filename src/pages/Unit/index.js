import { Route, Routes } from "react-router-dom";
import * as S from "./styles";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Reports from "./Reports";
import Tracked from "./Tracked";
import Containers from "./Containers";
import Requests from "./Requests";
import Data from "./Data";

const Unit = () => {
  return (
    <S.Container>
      <Header />
      <S.Page>
        <Navigation />
        <S.Content>
          <Routes>
            <Route path={"/report"} element={<Reports />} />
            <Route path={"/tracked"} element={<Tracked />} />
            <Route path={"/containers"} element={<Containers />} />
            <Route path={"/requests"} element={<Requests />} />
            <Route path={"/data"} element={<Data />} />
          </Routes>
        </S.Content>
      </S.Page>
    </S.Container>
  );
};

export default Unit;
