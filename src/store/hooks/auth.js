import { useSelector } from "react-redux";

export const useUserPicture = () => {
  const src = useSelector((state) => state.auth.pictureSrc);
  return [src, () => {}];
};
