import * as S from "./styles";
import { useState } from "react";
import TextInput from "../../../components/TextInput";
import Container from "../../../components/Container";
import { useContainers } from "../../../store/hooks/unit";

const getContainers = (containers, search) => {
  return containers
    .filter(
      (container) =>
        container.containerName.toLowerCase().includes(search.toLowerCase()) ||
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
        key={container.containerId}
        id={container.containerId}
        name={container.containerName}
        triggers={container.triggers}
      />
    ));
};

const Containers = ({ unitId }) => {
  const { containers, isLoading } = useContainers(unitId);
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
          {isLoading ? "loading" : getContainers(containers, search)}
        </S.Containers>
      </S.Wrapper>
    </S.Container>
  );
};

export default Containers;
