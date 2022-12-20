import * as S from "./styles";

const DeletingModal = ({ title, onAbort, onSubmit, children }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Body>{children}</S.Body>
      <S.Answers>
        <S.Save onClick={onSubmit}>Сохранить</S.Save>
        <S.Abort onClick={onAbort} autoFocus={true}>
          Отмена
        </S.Abort>
      </S.Answers>
    </S.Container>
  );
};

export default DeletingModal;
