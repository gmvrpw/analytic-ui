import * as S from "./styles";

const Container = ({ id, name, triggers }) => {
  return (
    <S.Container>
      <S.ID>{id}</S.ID>
      <S.NameWrapper>
        <S.Name>{name}</S.Name>
      </S.NameWrapper>
      <S.Triggers>
        {triggers.map((trigger, index) => (
          <S.Trigger key={index}>
            {trigger.element}#{trigger.id}.{trigger.className}
          </S.Trigger>
        ))}
        <S.FallInto to={`${id}`}>
          {"все 36"}
          <S.FallIntoIcon />
        </S.FallInto>
      </S.Triggers>
    </S.Container>
  );
};

export default Container;
