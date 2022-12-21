import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.h1`
  font-family: Dela Gothic One, serif;
  font-size: 2em;
  font-weight: 300;
  padding: 0;
  margin: 0;
`;

export const Table = styled.table`
  border-spacing: 0;
`;

export const HeaderRow = styled.tr`
  height: 40px;
  background: white;
`;

export const Row = styled.tr`
  height: 40px;
  :hover {
    background: white;
  }
`;

export const HeaderCell = styled.th`
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 600;
`;

export const Cell = styled.td`
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 12px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40px;
`;

export const Page = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 12px;
  border-radius: 8px;
  font-family: Inter, sans-serif;
  color: black;
  text-decoration: none;
  background: white;
`;
