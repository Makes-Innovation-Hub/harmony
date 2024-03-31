import React from "react";
import * as S from "./SongAndSingerContainerStyles";

export default function SongAndSingerContainer({
  goBackToOriginalSong,
  songCoverImg,
  originalSongName,
  originalArtistName,
}) {
  return (
    <S.ArtistContainer>
      <S.SongCover
        onClick={goBackToOriginalSong}
        src={songCoverImg}
        alt="Original song cover art"
      />

      <S.SongAndSingerContainer>
        <S.SongName onClick={goBackToOriginalSong}>
          {originalSongName}
        </S.SongName>
        <S.OriginalArtistName onClick={goBackToOriginalSong}>
          {originalArtistName}
        </S.OriginalArtistName>
      </S.SongAndSingerContainer>
    </S.ArtistContainer>
  );
}
