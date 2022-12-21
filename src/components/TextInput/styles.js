import styled from "styled-components";
import { GoogleMaterialIcon } from "../Icon";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  gap: 1rem;
  background: white;
`;

export const Icon = styled(GoogleMaterialIcon)``;

export const Input = styled.input`
  display: flex;
  flex: 1;
  font-family: Inter, sans-serif;
  font-weight: 600;
  border: none;
  outline: none;
`;
