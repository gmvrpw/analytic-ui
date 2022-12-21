import * as S from "./styles";

const Header = () => {
  return (
    <S.Container>
      <S.Home>
        <S.Logo />
        <S.Name to={"/unit"}>Аналитика</S.Name>
      </S.Home>
    </S.Container>
  );
};

export default Header;
