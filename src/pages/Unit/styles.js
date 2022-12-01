import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
`;

export const Page = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  padding: 1rem;
  gap: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-family: Dela Gothic One, serif;
  font-size: 2em;
  font-weight: 300;
  padding: 0;
  margin: 0;
`;
