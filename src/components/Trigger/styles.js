import styled from "styled-components";
import { GoogleMaterialIcon } from "../Icon";

export const Edit = styled.button`
  position: absolute;
  top: 4px;
  right: 28px;
  height: 24px;
  width: 24px;
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
  opacity: 0;
  :hover {
    background: #f0f0f0;
  }
  :focus {
    opacity: 1;
    background: #f0f0f0;
  }
`;

export const Delete = styled(Edit)`
  right: 4px;
  background: rgba(255, 100, 100);
  :hover {
    background: rgba(255, 0, 0);
  }
  :focus {
    background: rgba(255, 0, 0);
  }
`;

export const DeleteIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "delete",
}))`
  color: white;
  font-size: 14px;
`;

export const EditIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "edit",
}))`
  font-size: 14px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  background: white;
  border-radius: 8px;
  font-size: 12px;
  font-family: Inter, sans-serif;
  border: none;
  padding: 0 12px;
  font-weight: 600;
  :hover ${Edit} {
    opacity: 1;
  }
  :focus ${Edit} {
    opacity: 1;
  }
  :hover ${Delete} {
    opacity: 1;
  }
  :focus ${Delete} {
    opacity: 1;
  }
`;

export const ModalQuestion = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ModalTrigger = styled.div`
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 90%;
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
