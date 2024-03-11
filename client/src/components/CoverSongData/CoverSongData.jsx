import React from "react";
import { CoversTitle } from "./CoverSongDataStyles";
import SongCoverNew from "../SongCoverNew/SongCoverNew";

export default function CoverSongData({ songData, songByIdData }) {
  return (
    <div>
      {songData?.coverSong.length > 0 && <CoversTitle>Covers</CoversTitle>}

      {songByIdData?.coverSong.map((coverInfo) => {
        return (
          <div key={coverInfo._id}>
            <SongCoverNew
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
