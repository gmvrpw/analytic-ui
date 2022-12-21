import * as S from "./styles";
import CountOfTriggered from "./CountOfTriggered";

const Requests = () => {
  return (
    <S.Container>
      <S.Title>
        <S.Name> Запросы </S.Name>
      </S.Title>
      <CountOfTriggered />
    </S.Container>
  );
};

export default Requests;
