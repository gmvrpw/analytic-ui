import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 1.5rem;
  background: ${(props) => props.theme.header.background};
`;

export const Home = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img``;

export const Name = styled(Link)`
  display: flex;
  font-size: 18px;
  line-height: 2em;
  font-weight: 300;
  font-family: "Dela Gothic One", cursive;
  color: black;
  text-decoration: none;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: 2.5rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0 0 2px 0,
    rgba(60, 64, 67, 0.15) 0 0 3px 1px;
  aspect-ratio: 1 / 1;
`;
