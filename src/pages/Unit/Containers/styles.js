import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 48px 64px 1fr;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-family: Dela Gothic One, serif;
  font-size: 2em;
  font-weight: 300;
  padding: 0;
  margin: 0;
`;

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
  overflow-y: auto;
`;

export const Containers = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;
