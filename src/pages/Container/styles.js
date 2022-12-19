import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoogleMaterialIcon } from "../../components/Icon";
import TextInput from "../../components/TextInput";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const BackIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "arrow_back_ios_new",
}))`
  font-size: 20px;
  font-weight: 800;
  transform: translate(-2px, 0);
  cursor: pointer;
  color: black;
`;

export const Back = styled(Link)`
  display: flex;
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  :hover {
    background: white;
  }
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

export const Copy = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  margin: 0;
  background: white;
  border: none;
  border-radius: 8px;
  opacity: 0;
  :hover {
    background: #f0f0f0;
  }
`;

export const Script = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  border-radius: 16px;
  background: white;
  padding: 4px 16px;
  gap: 12px;
  :hover ${Copy} {
    opacity: 1;
  }
`;

export const CopyIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "content_copy",
}))`
  align-self: center;
  font-size: 18px;
`;

export const LineCounter = styled.code`
  font-size: 12px;
`;

export const LineContent = styled.code`
  font-size: 12px;
`;

export const Search = styled(TextInput).attrs(() => ({
  icon: "search",
}))`
  height: 64px;
`;

export const Triggers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const NewTriggerIcon = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "add",
}))`
  font-size: 16px;
`;

export const NewTrigger = styled.button`
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
  :hover {
    background: #f0f0f0;
  }
`;
