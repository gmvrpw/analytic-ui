import * as S from "./styles";

const items = [
  {
    to: "reports",
    name: "Отчеты",
  },
  {
    to: "containers",
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

const Navigation = ({ match }) => {
  console.log(match);
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
