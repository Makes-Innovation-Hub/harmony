import React from "react";
import SongCover from "../SongCover/SongCover";
import { CoversTitle } from "./CoverSongDataStyles";

export default function CoverSongData({ songData, songByIdData }) {
  return (
    <div>
      {songData?.coverSong.length > 0 && <CoversTitle>Covers</CoversTitle>}

      {songByIdData?.coverSong.map((coverInfo) => {
        return (
          <div key={coverInfo._id}>
            <SongCover
              artist={coverInfo?.coverArtistName}
              backgroundImg={coverInfo?.backgroundUrl}
              state={coverInfo}
              likes={coverInfo?.likes.length}
              views={coverInfo?.views}
            />
          </div>
        );
      })}
    </div>
  );
}
