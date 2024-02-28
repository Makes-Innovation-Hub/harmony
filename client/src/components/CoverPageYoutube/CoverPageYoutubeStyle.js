import styled from "styled-components";

export const YoutubeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 2.5rem;
  width: 350px;
  height: 255px;
  position: relative;

  @media (max-width: 400px) {
    margin: 1rem 0.7rem;
  }
`;
export const OriginalSong = styled.div`
  font-family: ABeeZee;
  font-size: 12px;
  font-style: italic;
  margin-top: 50px;
  font-weight: 400;
  line-height: 16px;
  text-decoration: underline;
  letter-spacing: 0em;
  text-align: center;
  color: #333333;
`;

export const PlayVideo = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  position: absolute;
  background-color: transparent;
  display: ${(props) => (props.$visible ? "none" : "block")};
`;
