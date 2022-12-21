import * as S from "./styles";
import { useEffect, useState } from "react";
import { useTriggers } from "../../../../store/hooks/unit";
import { useParams } from "react-router-dom";
import getTriggerName from "../../../../units/getTriggerName";
import { useCountOfTriggered } from "../../../../store/hooks/requests";

const CountOfTriggered = () => {
  const { unitId } = useParams();
  const triggers = useTriggers(unitId);
  const [triggerId, setTriggerId] = useState(0);
  useEffect(() => {
    if (triggers.length != 0) {
      setTriggerId(triggers[0].triggerId);
    }
  }, [triggers.length]);
  const [countOfTriggered, getCountOfTriggered] = useCountOfTriggered();
  const [from, setFrom] = useState("<нет>");
  const [to, setTo] = useState("<нет>");
  return (
    <S.Container>
      <S.Request>
        <S.Label>
          Триггер
          <S.Select
            onChange={(e) => {
              setTriggerId(e.target.value);
            }}
            defaultValue={triggerId}
          >
            {triggers.map((trigger) => (
              <S.Option key={trigger.triggerId} value={trigger.triggerId}>
                {getTriggerName(trigger)}
              </S.Option>
            ))}
          </S.Select>
        </S.Label>
        <S.Label>
          Дата с:
          <input
            type={"datetime-local"}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          />
        </S.Label>
        <S.Label>
          Дата до:
          <input
            type={"datetime-local"}
            onChange={(e) => {
              setTo(e.target.value);
            }}
          />
        </S.Label>
        <S.Submit
          onClick={() => {
            getCountOfTriggered(triggerId, from, to, 1);
          }}
        >
          Найти
        </S.Submit>
      </S.Request>
      <S.Response>
        <S.Value>{countOfTriggered === null ? "?" : countOfTriggered}</S.Value>
        <S.Description>
          раз сработал триггер <br />
          <S.Important>
            {getTriggerName(
              triggers.filter((trigger) => trigger.triggerId == triggerId)[0]
            )}
          </S.Important>{" "}
          <br />в промежуток времени с <br /> <S.Important>{from}</S.Important>{" "}
          по <S.Important>{to}</S.Important>
        </S.Description>
      </S.Response>
    </S.Container>
  );
};

export default CountOfTriggered;
