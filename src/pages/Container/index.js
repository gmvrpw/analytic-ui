import * as S from "./styles";
import { useParams } from "react-router-dom";
import {
  useContainer,
  useCreateTrigger,
  useSaveContainer,
} from "../../store/hooks/unit";
import Trigger from "../../components/Trigger";
import { useState } from "react";
import Modal from "../../components/Modal";
import EditingModal from "../../components/Modal/EditingModal";

const Containers = () => {
  const { containerId } = useParams();
  const { container, isLoading } = useContainer(containerId);
  const saveContainer = useSaveContainer(containerId);
  const [search, setSearch] = useState("");
  const [creating, setCreating] = useState(false);
  const createTrigger = useCreateTrigger();
  const [elementName, setElementName] = useState("");
  const [elementId, setElementId] = useState("");
  const [elementClassName, setElementClassName] = useState("");
  const [triggerEvent, setTriggerEvent] = useState("");
  const scriptURL = `<script src="analytic.com/scripts/${containerId}.js" />`;
  console.log(container);
  return isLoading ? (
    "loading"
  ) : (
    <S.Container>
      <S.Title>
        <S.Back to={"../container"}>
          <S.BackIcon />
        </S.Back>
        <S.Name>Контейнеры / {container.containerName}</S.Name>
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
        <S.NewTrigger
          onClick={() => {
            setCreating(true);
          }}
        >
          <S.NewTriggerIcon />
          Новый триггер
        </S.NewTrigger>
        {container.triggers
          .filter((trigger) =>
            `${trigger.element.name}#${trigger.element.id}.${trigger.element.className}(${trigger.event})`
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((trigger) => (
            <Trigger key={trigger.triggerId} trigger={trigger} />
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
      <S.Actions>
        <S.Save
          onClick={() => {
            saveContainer(container);
          }}
        >
          Сохранить
        </S.Save>
      </S.Actions>
    </S.Container>
  );
};

export default Containers;
