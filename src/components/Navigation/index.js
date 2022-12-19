import * as S from "./styles";

const items = [
  {
    to: "reports",
    name: "Отчеты",
  },
  {
    to: "container",
    name: "Контейнеры",
  },
  {
    to: "tracked",
    name: "Отслеживаемые",
  },
  {
    to: "requests",
    name: "Запросы",
  },
  {
    to: "data",
    name: "Данные",
  },
];

const Navigation = () => {
  return (
    <S.Container>
      {items.map((item, index) => (
        <S.Item key={index} to={item.to}>
          {item.name}
        </S.Item>
      ))}
    </S.Container>
  );
};

export default Navigation;
