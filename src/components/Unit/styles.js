import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: 80px;
  background: white;
  border-radius: 8px;
  font-size: 12px;
  font-family: Inter, sans-serif;
  border: none;
  padding: 0 44px;
`;

export const Name = styled(Link)`
  text-decoration: none;
  font-size: 32px;
  color: black;
  font-family: Dela Gothic One, serif;
  font-weight: 400;
`;

export const CountOfContainers = styled(Link)`
  text-decoration: none;
  font-size: 10px;
  color: black;
  :hover {
    color: #00a3ff;
  }
`;
