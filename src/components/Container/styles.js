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
`;

export const ID = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
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

export const Name = styled.div`
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: Dela Gothic One, serif;
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
