import styled from "styled-components";
import { constants } from "../../styles";

export const Container = styled.div`
  display: grid;
  grid-template-rows: ${constants.header.height} 1fr;
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
  overflow-y: hidden;
`;

export const Page = styled.div`
  display: grid;
  grid-template-columns: ${constants.sidebar.width} 1fr;
  padding: 1rem;
  gap: 1rem;
`;

export const Content = styled.div``;
