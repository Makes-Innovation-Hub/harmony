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

export const ArtistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-top: 30px;
  max-width: 100%;
`;

export const SongCover = styled.img`
  width: 149px;
  height: 145px;
  top: 154px;
  left: 31px;
  border-radius: 30px;
`;

export const SongAndSingerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const SongName = styled.h3`
  font-family: ABeeZee;
  font-size: 23px;
  font-style: italic;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0em;
  text-align: center;
`;

export const OriginalArtistName = styled.p`
  font-family: ABeeZee;
  font-size: 17px;
  font-style: italic;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #828282;
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

  .likes {
    margin-top: 3px;
  }
`;

export const LikedCoverButton = styled.img`
  width: 20px;
  height: 20px;
  margin-top: -2.5px;

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
  bottom: -6px;
  left: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 5px;
  width: 101%;
  height: 8vh;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease-out forwards;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;
