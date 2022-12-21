import styled from "styled-components";
import { constants } from "../../styles";
import { GoogleMaterialIcon } from "../../components/Icon";

export const Container = styled.div`
  display: grid;
  grid-template-rows: ${constants.header.height} 1fr;
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
  overflow-y: hidden;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Name = styled.h1`
  font-family: Dela Gothic One, serif;
  font-size: 2em;
  font-weight: 300;
  padding: 0;
  margin: 0;
`;

export const CreateIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "add",
}))``;

export const Create = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 80px;
  background: white;
  border: 1px black dashed;
  border-radius: 8px;
  font-size: 12px;
  font-family: Inter, sans-serif;
  padding: 0 32px 0 28px;
  font-weight: 600;
  margin-bottom: 4px;
  :hover {
    background: #f0f0f0;
  }
`;

export const Units = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ModalInput = styled.input`
  border-radius: 8px;
  padding: 8px;
  border: none;
  font-size: 10px;
  background: #f0f0f0;
`;
