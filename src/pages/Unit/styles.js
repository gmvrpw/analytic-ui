import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: ${(props) => props.theme.header.height} 1fr;
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
`;

export const Page = styled.div`
  display: grid;
  grid-template-columns: 192px 1fr;
  padding: 1rem;
  gap: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  overflow-y: auto;
`;
