import * as S from "./styles";
import { useTrigger } from "../../store/hooks/unit";
import { useState } from "react";
import Modal from "../Modal";
import DeletingModal from "../Modal/DeletingModal";
import { ModalQuestion } from "./styles";

const Trigger = ({ id }) => {
  const [deleting, setDeleting] = useState(false);
  const [trigger, , deleteTrigger] = useTrigger(id);
  const { element, event } = trigger;
  const triggerInString = `${element.name}#${element.id}.${element.className}(${event})`;
  return (
    <S.Container tabIndex={0}>
      {triggerInString}
      <S.Edit>
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
              <ModalQuestion>
                Вы действительно хотите удалить тригер{" "}
                <S.ModalTrigger>{triggerInString}</S.ModalTrigger>?
              </ModalQuestion>
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
    </S.Container>
  );
};

export default Trigger;
