import styled from "styled-components";
import { GoogleMaterialIcon } from "../Icon";

export const Container = styled.div`
  height: 2.2rem;
  width: 12rem;
`;

export const Wrapper = styled.div``;

export const Toggler = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 2.2rem;
`;

export const Title = styled.div`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: "Inter", sans-serif;
  width: 100%;
  text-align: left;
`;

export const Indicator = styled(GoogleMaterialIcon).attrs(() => ({
  icon: "arrow_drop_down",
}))``;

export const Body = styled.div`
  display: block;
  height: ${(props) => (props.opened ? props.count * 2.2 : 0)}rem;
  overflow: hidden;
`;

export const Item = styled.button`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
  height: 2.2rem;
  width: 100%;
  font-family: "Inter", sans-serif;
`;
