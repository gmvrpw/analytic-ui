import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 400px;
  background: white;
  border-radius: 16px;
`;

export const Request = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 16px;
`;

export const Response = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Value = styled.div`
  font-family: Dela Gothic One, serif;
  font-weight: 400;
  font-size: 64px;
  width: 100%;
  text-align: center;
`;

export const Description = styled.div`
  font-family: Inter, sans-serif;
  font-size: 10px;
  width: 100%;
  text-align: center;
  max-width: 230px;
`;

export const Important = styled.span`
  font-weight: 600;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  gap: 4px;
  width: 250px;
`;

export const Select = styled.select`
  height: 32px;
  padding: 0 16px;
  border-radius: 8px;
  font-family: Inter, sans-serif;
  font-weight: 600;
`;

export const Option = styled.option``;

export const Submit = styled.button`
  width: 250px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 8px;
  font-size: 12px;
  font-family: Inter, sans-serif;
  border: none;
  padding: 0;
  font-weight: 600;
  :hover {
    background: #f0f0f0;
  }
`;
