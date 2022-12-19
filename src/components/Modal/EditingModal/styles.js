import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: white;
  max-width: 300px;
  border-radius: 16px;
  padding: 24px;
  font-family: Inter, sans-serif;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 800;
`;

export const Body = styled.div`
  font-family: Inter, sans-serif;
  text-align: center;
  font-size: 10px;
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
`;

export const Save = styled.button`
  background: rgb(255, 255, 255);
  color: green;
  border: none;
  font-size: 10px;
  padding: 6px 16px;
  border-radius: 4px;
  font-weight: 500;
  :hover {
    background: rgb(230, 255, 230);
  }
`;

export const Abort = styled.button`
  background: white;
  border: none;
  font-size: 10px;
  padding: 6px 24px;
  border-radius: 4px;
  :hover {
    background: #f0f0f0;
  }
`;
