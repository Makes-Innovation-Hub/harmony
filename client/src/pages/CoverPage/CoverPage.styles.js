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
  align-items: center;
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

export const AllCommentContainer = styled.div`
  padding-bottom: 30px;
`;

export const CommentContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 40px;

  @media screen and (max-width: 400px) and (max-height: 900px) {
    margin-left: 10px;
  }
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const CommentInput = styled.textarea`
  border: 1px solid gray;
  border-radius: 10px;
  padding-top: 15px;
  padding-left: 10px;
  padding-bottom: 60px;
  padding-right: 20px;
  width: 285px;
  resize: none;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SendButton = styled.button`
  font-family: Rubik;
  font-size: 12px;
  font-weight: 500;

  color: #ffffff;
  background: #4285f4;
  border: none;
  width: 87px;
  height: 29px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: 66.5%;
  margin-top: 20px;

  @media screen and (max-height: 900px) {
    margin-left: 69%;
  }

  @media screen and (max-width: 400px) and (min-height: 800px) {
    margin-left: 66%;
  }
`;
