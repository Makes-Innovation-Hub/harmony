import styled, { keyframes } from "styled-components";
// Define keyframes for the animation
const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;
export const PlaylistTitle = styled.h3`
  font-family: ABeeZee;
  font-size: 17px;
  font-style: italic;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: center;
  color: #828282;
  margin-top: 20px;
  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
    &:hover {
      color: #333333;
      cursor: pointer;
    }
  }
`;

export const ArtistContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: start;
  padding-top: 30px;
  width: 329px;
`;

export const ProfileImgContainer = styled.div`
  width: 46%;
`;
export const ProfileImg = styled.img`
  width: 149px;
  height: 145px;
  border-radius: 30px;
`;

export const SongAndSingerContainer = styled.div`
  width: 54%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding-top: 25px;
  /* border: saddlebrown solid 1px; */
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

export const SongDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  animation: ${({ direction }) =>
      direction === "left" ? slideInFromLeft : slideInFromRight}
    0.7s forwards;
`;

export const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  padding-bottom: 15px;
  /* @media (min-width: 768px) {
    //padding-bottom: 160px;
  } */
`;
