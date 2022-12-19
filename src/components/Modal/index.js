import ReactDOM from "react-dom";
import * as S from "./styles";

const Modal = ({ onAbort, children }) => {
  return ReactDOM.createPortal(
    <S.Container
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onAbort(e);
        }
        e.preventDefault();
      }}
    >
      {children}
    </S.Container>,
    document.getElementById("modalRoot")
  );
};

export default Modal;
