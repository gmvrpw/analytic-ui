import * as S from "./styles";

export const GoogleMaterialIcon = ({ className, icon, ...props }) => (
  <S.GoogleMaterialIcon
    className={`material-symbols-outlined ${className}`}
    {...props}
  >
    {icon}
  </S.GoogleMaterialIcon>
);
