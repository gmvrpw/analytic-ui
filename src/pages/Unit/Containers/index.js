import * as S from "./styles";
import { useState } from "react";
import TextInput from "../../../components/TextInput";
import Container from "../../../components/Container";
import { useContainers, useCreateContainer } from "../../../store/hooks/unit";
import EditingModal from "../../../components/Modal/EditingModal";
import Modal from "../../../components/Modal";

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
  const createContainer = useCreateContainer(unitId);
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState("");
  return (
    <S.Container>
      <S.Title>
        Контейнеры
        <S.Create
          onClick={() => {
            setCreating(true);
          }}
        >
          <S.CreateIcon />
          Новый контейнер
        </S.Create>
        {creating ? (
          <Modal onAbort={() => setCreating(false)}>
            <EditingModal
              title={"Создание контейнера"}
              onAbort={() => {
                setCreating(false);
              }}
              onSubmit={() => {
                createContainer(name);
                setCreating(false);
              }}
            >
              <S.ModalBody>
                <S.ModalInput
                  placeholder={"Имя"}
                  defaultValue={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </S.ModalBody>
            </EditingModal>
          </Modal>
        ) : (
          false
        )}
      </S.Title>
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
