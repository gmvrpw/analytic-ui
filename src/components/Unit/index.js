import * as S from "./styles";

const Unit = ({ unit }) => {
  const { unitId, unitName, countOfContainers } = unit;
  return (
    <S.Container>
      <S.Name to={`${unitId}`}>{unitName}</S.Name>
      <S.CountOfContainers to={`${unitId}/container`}>
        контейнеров: {countOfContainers}
      </S.CountOfContainers>
    </S.Container>
  );
};

export default Unit;
