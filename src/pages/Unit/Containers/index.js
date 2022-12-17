import * as S from "./styles";
import TextInput from "../../../components/TextInput";
import Container from "../../../components/Container";
import { useContainers } from "../../../store/hooks/unit";

const Containers = () => {
  const [containers] = useContainers();
  return (
    <S.Container>
      <S.Title>Контейнеры</S.Title>
      <TextInput
        icon={"search"}
        placeholder={
          "Ищите что-то конкретное? Начните вводить: название, тэг, класс, айди..."
        }
      />
      <S.Wrapper>
        <S.Containers>
          {containers.map((container) => (
            <Container
              key={container.id}
              id={container.id}
              name={container.name}
              triggers={container.triggers}
            />
          ))}
        </S.Containers>
      </S.Wrapper>
    </S.Container>
  );
};

export default Containers;
