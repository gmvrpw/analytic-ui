import { useState, useEffect } from "react";
import * as S from "./styles";

const ToggleList = ({ title, items, defaultOpened, onToggle, className }) => {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(defaultOpened);
  }, [defaultOpened]);
  const onToggleDefault = () => {
    setOpened(!opened);
  };
  return (
    <S.Container opened={opened} count={items.length} className={className}>
      <S.Wrapper>
        <S.Toggler opened={opened} onClick={onToggle || onToggleDefault}>
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
      </S.Wrapper>
    </S.Container>
  );
};

export default ToggleList;
