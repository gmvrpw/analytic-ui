import * as S from "./styles";

const Container = ({ id, name, triggers }) => {
  return (
    <S.Container>
      <S.Name>{name}</S.Name>
      <S.ID>{id}</S.ID>
      <S.Triggers>
        {triggers.map((trigger, index) => (
          <S.Trigger key={index}>
            {trigger.element}#{trigger.id}.{trigger.className}
          </S.Trigger>
        ))}
      </S.Triggers>
      <S.FallInto to={`${id}`}>
        {"Весь контейнер"}
        <S.FallIntoIcon />
      </S.FallInto>
    </S.Container>
  );
};

export default Container;
