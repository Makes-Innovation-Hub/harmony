import styled from "styled-components";

export const YoutubeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 2.5rem;
  width: 350px;
  height: 255px;
  position: relative;
  cursor: pointer;
  border-radius: 30px;

  @media (max-width: 400px) {
    margin: 1rem 0.7rem;
  }
`;

export const PlayVideo = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  position: absolute;
  background-color: transparent;
  display: ${(props) => (props.$visible ? "none" : "block")};
`;
