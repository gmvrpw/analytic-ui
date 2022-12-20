import * as S from "./styles";
import { useTrigger } from "../../store/hooks/unit";
import { useEffect, useState } from "react";
import Modal from "../Modal";
import DeletingModal from "../Modal/DeletingModal";
import EditingModal from "../Modal/EditingModal";

const Trigger = ({ id }) => {
  const [deleting, setDeleting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [trigger, updateTrigger, deleteTrigger] = useTrigger(id);
  const { element, event } = trigger;
  const triggerInString = `${element.name}#${element.id}.${element.className}(${event})`;
  const [elementName, setElementName] = useState("");
  const [elementId, setElementId] = useState("");
  const [elementClassName, setElementClassName] = useState("");
  const [triggerEvent, setTriggerEvent] = useState("");
  useEffect(() => {
    setElementName(trigger.element.name);
    setElementId(trigger.element.id);
    setElementClassName(trigger.element.className);
    setTriggerEvent(trigger.event);
  }, [trigger]);
  return (
    <S.Container tabIndex={0}>
      {triggerInString}
      <S.Edit
        onClick={() => {
          setEditing(true);
        }}
      >
        <S.EditIcon />
      </S.Edit>
      <S.Delete
        onClick={() => {
          setDeleting(true);
        }}
      >
        <S.DeleteIcon />
      </S.Delete>
      {deleting ? (
        <Modal onAbort={() => setDeleting(false)}>
          <DeletingModal
            title={"Удаление тригера"}
            question={
              <S.ModalQuestion>
                Вы действительно хотите удалить тригер{" "}
                <S.ModalTrigger>{triggerInString}</S.ModalTrigger>?
              </S.ModalQuestion>
            }
            onAbort={() => {
              setDeleting(false);
            }}
            onSubmit={() => {
              deleteTrigger();
              setDeleting(false);
            }}
          />
        </Modal>
      ) : (
        false
      )}
      {editing ? (
        <Modal onAbort={() => setEditing(false)}>
          <EditingModal
            title={"Изменение тригера"}
            onAbort={() => {
              setEditing(false);
            }}
            onSubmit={() => {
              updateTrigger({
                id: trigger.id,
                element: {
                  name: elementName,
                  id: elementId,
                  className: elementClassName,
                },
                event: triggerEvent,
              });
              setEditing(false);
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

export default Trigger;
