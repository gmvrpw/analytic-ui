import styled from "styled-components";
import { GoogleMaterialIcon } from "../../../components/Icon";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 44px 64px 1fr;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

export const CreateIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "add",
}))``;

export const Create = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 32px;
  background: white;
  border: 1px black dashed;
  border-radius: 8px;
  font-size: 12px;
  font-family: Inter, sans-serif;
  padding: 0 8px;
  font-weight: 600;
  margin-bottom: 4px;
  :hover {
    background: #f0f0f0;
  }
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
