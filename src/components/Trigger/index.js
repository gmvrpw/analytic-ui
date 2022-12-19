import * as S from "./styles";
import { useTrigger } from "../../store/hooks/unit";

const Trigger = ({ id }) => {
  const [trigger] = useTrigger(id);
  const { element, event } = trigger;
  return (
    <S.Container tabIndex={0}>
      {`${element.name}#${element.id}.${element.className}(${event})`}
      <S.Edit>
        <S.EditIcon />
      </S.Edit>
      <S.Delete>
        <S.DeleteIcon />
      </S.Delete>
    </S.Container>
  );
};

export default Trigger;
