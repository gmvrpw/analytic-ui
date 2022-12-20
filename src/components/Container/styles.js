import styled, { keyframes } from "styled-components";
import { GoogleMaterialIcon } from "../Icon";
import { Link } from "react-router-dom";

export const FallIntoIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "chevron_right",
}))`
  position: relative;
  font-size: 12px;
  left: 0;
  transition: left linear 100ms;
`;

export const Copy = styled.button`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  font-size: 12px;
  font-family: Inter, sans-serif;
  border: none;
  padding: 0;
  font-weight: 600;
  opacity: 0;
  overflow: hidden;
  :hover {
    background: #f0f0f0;
  }
  :focus {
    opacity: 1;
    background: #f0f0f0;
  }
`;

export const Delete = styled(Copy)`
  background: rgba(255, 255, 255);
  :hover {
    background: rgba(255, 230, 230);
  }
  :focus {
    background: rgba(255, 230, 230);
  }
`;

export const DeleteIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "delete",
}))`
  color: red;
  font-size: 14px;
`;

export const CopyIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "javascript",
}))`
  font-size: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.4rem;
  border-radius: 1.2rem;
  background: white;
  gap: 15px;
  min-width: 0px;
  aspect-ratio: 1 / 1;
  :hover ${Copy} {
    opacity: 1;
  }
  :focus ${Copy} {
    opacity: 1;
  }
  :hover ${Delete} {
    opacity: 1;
  }
  :focus ${Delete} {
    opacity: 1;
  }
`;

export const Actions = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 4px;
`;

export const NameWrapper = styled.div`
  position: relative;
  height: 20%;
  overflow: hidden;
`;

const ClippedNameAnimation = keyframes`
  0% {
    transform: translate(0, 0);
  }
  20% {
    transform: translate(0, 0);
  }
  80% {
    transform: translate(calc(-100% + 230px), 0);
  }
  100% {
    transform: translate(calc(-100% + 230px), 0);
  }
`;

export const Name = styled(Link)`
  display: block;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: Dela Gothic One, serif;
  text-decoration: none;
  font-weight: 400;
  font-size: 30px;
  height: 100%;
  min-width: 100%;
  color: black;
  cursor: pointer;
  :hover {
    position: absolute;
    animation: ${ClippedNameAnimation} ${(props) => props.children.length / 8}s
      linear alternate infinite;
    overflow: hidden;
    white-space: nowrap;
    height: 100%;
  }
`;

export const FallInto = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-size: 10px;
  color: #a0a0a0;
  padding: 3px 5px;
  text-decoration: none;
  :hover {
    color: #00a3ff;
  }
  :hover ${FallIntoIcon} {
    left: 4px;
  }
`;

export const Triggers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  flex: 1;
`;

export const Trigger = styled.div`
  display: inline-block;
  font-size: 10px;
  border-radius: 5px;
  padding: 3px 5px;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    background: #f0f0f0;
  }
  cursor: default;
  user-select: none;
`;

export const ModalQuestion = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 90%;
`;
