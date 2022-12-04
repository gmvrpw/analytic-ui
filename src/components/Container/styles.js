import styled from "styled-components";
import { GoogleMaterialIcon } from "../Icon";
import { Link } from "react-router-dom";

export const FallIntoIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "chevron_right",
}))`
  position: relative;
  font-size: 12px;
  left: 0;
  transition: left ease-in 100ms;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.4rem;
  border-radius: 1.2rem;
  background: white;
  gap: 15px;
  height: 320px;
  :hover ${FallIntoIcon} {
    left: 5px;
  }
`;

export const Name = styled.div`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
`;

export const ID = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Dela Gothic One, serif;
  font-weight: 400;
  font-size: 30px;
  height: 20%;
`;

export const FallInto = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter, sans-serif;
  font-size: 10px;
  color: #a0a0a0;
  text-decoration: none;
  :hover {
    color: #00a3ff;
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
`;
