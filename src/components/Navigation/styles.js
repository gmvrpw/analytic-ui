import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Item = styled(NavLink).attrs((props) => ({
  style: ({ isActive }) => ({
    background: isActive ? props.theme.navigation.active.background : "none",
  }),
}))`
  display: flex;
  flex: 1;
  align-items: center;
  min-height: 32px;
  font-size: 12px;
  font-family: "Dela Gothic One", serif;
  font-weight: 100;
  border-radius: 0.7rem;
  color: ${(props) => props.theme.navigation.color};
  text-decoration: none;
  padding: 0 16px;
  z-index: 1;
`;
