import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 48px auto 1fr;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-family: Dela Gothic One, serif;
  font-size: 2em;
  font-weight: 300;
  padding: 0;
  margin: 0;
`;

export const Containers = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  height: 100%;
`;
