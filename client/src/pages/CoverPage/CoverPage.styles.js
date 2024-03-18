import styled from "styled-components";

export const CoverArtistTitle = styled.h3`
  font-family: ABeeZee;
  font-size: 17px;
  font-style: italic;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #828282;
  margin-top: 20px;
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
  position: fixed;
  bottom: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 5px;
  width: 101%;
  height: 9vh;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.5s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
