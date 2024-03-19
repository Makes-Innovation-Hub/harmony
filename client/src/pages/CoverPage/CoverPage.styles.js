import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const CoverArtistTitle = styled.h3`
  font-family: ABeeZee;
  font-size: 17px;
  font-style: italic;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #828282;

  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 30px;
`;

export const VideoInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: ABeeZee;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
`;

export const SameLine = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: "pointer";
  position: "relative";
`;

export const LikedCoverButton = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;

  animation: ${(props) => props.$likedCover && "jump 0.8s ease  alternate"};

  @keyframes jump {
    0% {
      -webkit-transform: scale(1.1, 0.9);
      transform: scale(1.1, 0.9);
    }
    50% {
      -webkit-transform: scale(0.9, 1.1) translateY(-0.5rem);
    }
    70% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

export const ShareLinks = styled.div`
  display: flex;
  gap: 20px;
  height: fit-content;
  width: 300px;
  overflow-x: auto;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    overflow: visible;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const CommentSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 93%;

  @media screen and (min-width: 768px) {
    width: 20%;
  }
`;

export const Svgs = styled.img`
  cursor: pointer;
`;

export const ShareMsg = styled.p`
  font-family: ABeeZee;
  white-space: nowrap;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const XButton = styled.div`
  position: absolute;
  font-family: ABeeZee;
  font-style: italic;
  color: black;
  cursor: pointer;
  &:hover {
    color: red;
  }
  top: 10px;
  right: 15px;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    top: 20px;
    right: 30px;
  }
`;
