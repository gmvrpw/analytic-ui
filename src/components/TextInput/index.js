import * as S from "./styles";
import { useState } from "react";

const TextInput = ({ type, icon, placeholder, defaultValue, onChange }) => {
  const [value, setValue] = useState("");
  const _onChange = (e) => {
    const handler = onChange || setValue;
    handler(e.target.value);
  };
  return (
    <S.Container>
      <S.Icon icon={icon} />
      <S.Input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue || value}
        onChange={_onChange}
      />
    </S.Container>
  );
};

export default TextInput;
