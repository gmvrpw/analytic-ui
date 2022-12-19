import * as S from "./styles";
import { useState } from "react";
import TextInput from "../../../components/TextInput";
import Container from "../../../components/Container";
import { useContainers } from "../../../store/hooks/unit";

const Containers = () => {
  const [containers] = useContainers();
  const [search, setSearch] = useState("");
  return (
    <S.Container>
      <S.Title>Контейнеры</S.Title>
      <TextInput
        icon={"search"}
        placeholder={
          "Ищите что-то конкретное? Начните вводить: название, тэг, класс, айди..."
        }
        defaultValue={search}
        onChange={(value) => {
          setSearch(value);
        }}
      />
      <S.Wrapper>
        <S.Containers>
          {containers
            .filter(
              (container) =>
                container.name.toLowerCase().includes(search.toLowerCase()) ||
                container.triggers
                  .reduce(
                    (acc, cur) =>
                      acc +
                      ` ${cur.element.name}#${cur.element.id}.${cur.element.className}(${cur.event})`,
                    ""
                  )
                  .toLowerCase()
                  .includes(search.toLowerCase())
            )
            .map((container) => (
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
