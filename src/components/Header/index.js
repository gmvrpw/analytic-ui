import * as S from "./styles";
import { useUserPicture } from "../../store/hooks/auth";

const Header = () => {
  const [userPictureSrc] = useUserPicture();
  return (
    <S.Container>
      <S.Home>
        <S.Logo />
        <S.Name>Аналитика</S.Name>
      </S.Home>
      <S.Profile>
        <S.Avatar src={userPictureSrc} />
      </S.Profile>
    </S.Container>
  );
};

export default Header;
