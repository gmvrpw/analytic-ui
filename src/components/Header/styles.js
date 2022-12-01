import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => props.theme.header.height};
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  padding: 0 1.5rem;
  background: ${(props) => props.theme.header.background};
`;

export const Home = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.img``;

export const Name = styled.div`
  display: flex;
  font-size: 1.6em;
  line-height: 2em;
  font-weight: 300;
  font-family: "Dela Gothic One", cursive;
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
