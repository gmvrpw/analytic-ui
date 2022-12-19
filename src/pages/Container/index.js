import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useContainer, useCreateTrigger } from "../../store/hooks/unit";
import Trigger from "../../components/Trigger";
import { useState } from "react";
import { NewTrigger, NewTriggerIcon } from "./styles";
import Modal from "../../components/Modal";
import EditingModal from "../../components/Modal/EditingModal";

const Containers = () => {
  const [search, setSearch] = useState("");
  const { containerId } = useParams();
  const container = useContainer(containerId);
  const { name, triggers } = container;
  const [creating, setCreating] = useState(false);
  const createTrigger = useCreateTrigger(containerId);
  const [elementName, setElementName] = useState("");
  const [elementId, setElementId] = useState("");
  const [elementClassName, setElementClassName] = useState("");
  const [triggerEvent, setTriggerEvent] = useState("");
  const scriptURL = `<script src="analytic.com/scripts/${containerId}.js" />`;
  return (
    <S.Container>
      <S.Title>
        <S.Back to={"../container"}>
          <S.BackIcon />
        </S.Back>
        <S.Name>Контейнеры / {name}</S.Name>
      </S.Title>
      <S.Script>
        <S.LineCounter>1</S.LineCounter>
        <S.LineContent>{scriptURL}</S.LineContent>
        <S.Copy
          onClick={async () => {
            await navigator.clipboard.write([
              // eslint-disable-next-line no-undef
              new ClipboardItem({
                "text/plain": new Blob([scriptURL], { type: "text/plain" }),
              }),
            ]);
          }}
        >
          <S.CopyIcon />
        </S.Copy>
      </S.Script>
      <S.Search
        placeholder={
          "Найдем нужный триггер. Тэг? Id? Класс? Ивент? Разумеется!"
        }
        defautValue={search}
        onChange={(value) => {
          setSearch(value);
        }}
      />
      <S.Triggers>
        <NewTrigger
          onClick={() => {
            setCreating(true);
          }}
        >
          <NewTriggerIcon />
          Новый триггер
        </NewTrigger>
        {triggers
          .filter((trigger) =>
            `${trigger.element.name}#${trigger.element.id}.${trigger.element.className}(${trigger.event})`
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((trigger, index) => (
            <Trigger key={trigger.id || index + 100000000} id={trigger.id} />
          ))}
      </S.Triggers>
      {creating ? (
        <Modal onAbort={() => setCreating(false)}>
          <EditingModal
            title={"Создание тригера"}
            onAbort={() => {
              setCreating(false);
            }}
            onSubmit={() => {
              createTrigger({
                element: {
                  name: elementName,
                  id: elementId,
                  className: elementClassName,
                },
                event: triggerEvent,
              });
              setCreating(false);
            }}
          >
            <S.ModalBody>
              <S.ModalInput
                placeholder={"Имя"}
                defaultValue={elementName}
                onChange={(e) => {
                  setElementName(e.target.value);
                }}
              />
              <S.ModalInput
                placeholder={"Id"}
                defaultValue={elementId}
                onChange={(e) => {
                  setElementId(e.target.value);
                }}
              />
              <S.ModalInput
                placeholder={"Класс"}
                defaultValue={elementClassName}
                onChange={(e) => {
                  setElementClassName(e.target.value);
                }}
              />
              <S.ModalInput
                placeholder={"Ивент"}
                defaultValue={triggerEvent}
                onChange={(e) => {
                  setTriggerEvent(e.target.value);
                }}
              />
            </S.ModalBody>
          </EditingModal>
        </Modal>
      ) : (
        false
      )}
    </S.Container>
  );
};

export default Containers;
