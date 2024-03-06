import styled from "styled-components";

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
    padding-bottom: 55px;
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
  /* height: 160px ; */
  /* border: saddlebrown solid 1px; */
`;

export const ProfileImgContainer = styled.div`
  width: 46%;
  /* border: rebeccapurple solid 1px; */
  /* padding-left: 1.2rem; */
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

export const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
`;
