import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useContainer } from "../../store/hooks/unit";
import Trigger from "../../components/Trigger";
import { useState } from "react";
import { NewTrigger, NewTriggerIcon } from "./styles";

const Containers = () => {
  const [search, setSearch] = useState("");
  const { containerId } = useParams();
  const container = useContainer(containerId);
  const { name, triggers } = container;
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
        <NewTrigger>
          <NewTriggerIcon />
          Новый триггер
        </NewTrigger>
        {triggers
          .filter((trigger) =>
            `${trigger.element.name}#${trigger.element.id}.${trigger.element.className}(${trigger.event})`
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((trigger) => (
            <Trigger key={trigger.id} id={trigger.id} />
          ))}
      </S.Triggers>
    </S.Container>
  );
};

export default Containers;
