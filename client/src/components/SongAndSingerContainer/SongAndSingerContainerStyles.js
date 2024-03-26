import styled from "styled-components";

export const ArtistContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-top: 30px;
  max-width: 100%;
`;

export const SongCover = styled.img`
  cursor: pointer;
  width: 149px;
  height: 145px;
  top: 154px;
  left: 31px;
  border-radius: 30px;
`;

export const SongAndSingerContainer = styled.div`
  cursor: pointer;
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
