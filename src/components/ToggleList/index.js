import { useState } from "react";
import * as S from "./styles";

const ToggleList = ({ title, items, className }) => {
  const [opened, setOpened] = useState(false);
  const onToggle = () => {
    setOpened(!opened);
  };
  return (
    <S.Container className={className} opened={opened}>
      <S.Toggler opened={opened} onClick={onToggle}>
        <S.Title>{title}</S.Title>
        <S.Indicator opened={opened} />
      </S.Toggler>
      <S.Body opened={opened} count={items.length}>
        {items.map((item, index) => (
          <S.Item
            key={index}
            opened={opened}
            count={items.length}
            onClick={item.onClick}
          >
            {item.label}
          </S.Item>
        ))}
      </S.Body>
    </S.Container>
  );
};

export default ToggleList;
