import * as S from "./styles";

const Container = ({ id, name, triggers }) => {
  return (
    <S.Container>
      <S.ID>{id}</S.ID>
      <S.NameWrapper>
        <S.Name to={`${id}`}>{name}</S.Name>
      </S.NameWrapper>
      <S.Triggers>
        {triggers.slice(0, 7).map((trigger, index) => (
          <S.Trigger key={index}>
            {trigger.element.name}#{trigger.element.id}.
            {trigger.element.className}({trigger.event})
          </S.Trigger>
        ))}
        {triggers.length > 7 ? (
          <S.FallInto to={`${id}`}>
            и еще {triggers.length - 7}
            <S.FallIntoIcon />
          </S.FallInto>
        ) : (
          false
        )}
      </S.Triggers>
    </S.Container>
  );
};

export default Container;
