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
`;

export const LikedCoverButtonWrapper = styled.div`
  background-color: cadetblue;
  display: inline-block;
  border-radius: 50%;
`;

export const LikedCoverButton = styled.img`
  width: 20px;
  height: 20px;
`;
