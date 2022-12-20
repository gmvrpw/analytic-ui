import * as S from "./styles";

const DeletingModal = ({ title, question, onAbort, onSubmit }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Question>{question}</S.Question>
      <S.Answers>
        <S.Delete onClick={onSubmit}>Удалить</S.Delete>
        <S.Abort onClick={onAbort} autoFocus={true}>
          Отмена
        </S.Abort>
      </S.Answers>
    </S.Container>
  );
};

export default DeletingModal;
