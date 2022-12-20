import * as S from "./styles";
import { useState } from "react";
import Modal from "../Modal";
import DeletingModal from "../Modal/DeletingModal";
import { useDeleteContainer } from "../../store/hooks/unit";

const Container = ({ id, name, triggers }) => {
  const scriptURL = `<script src="analytic.com/scripts/${id}.js" />`;
  const deleteContainer = useDeleteContainer(id);
  const [deleting, setDeleting] = useState(false);
  return (
    <S.Container>
      <S.Actions>
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
        <S.Delete
          onClick={() => {
            setDeleting(true);
          }}
        >
          <S.DeleteIcon />
        </S.Delete>
      </S.Actions>
      {deleting ? (
        <Modal onAbort={() => setDeleting(false)}>
          <DeletingModal
            title={"Удаление контейнера"}
            question={
              <S.ModalQuestion>
                Вы действительно хотите удалить контейнер
                <S.ModalContainer>{name}</S.ModalContainer>?
              </S.ModalQuestion>
            }
            onAbort={() => {
              setDeleting(false);
            }}
            onSubmit={() => {
              deleteContainer();
              setDeleting(false);
            }}
          />
        </Modal>
      ) : (
        false
      )}
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
