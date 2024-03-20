import React from "react";
import { CoversTitle, SongCoverVideoContainer } from "./CoverSongDataStyles";
import SongCoverNew from "../SongCoverNew/SongCoverNew";

export default function CoverSongData({ songByIdData }) {
  return (
    <div>
      {songByIdData?.coverSong.length > 0 && <CoversTitle>Covers</CoversTitle>}
      <SongCoverVideoContainer>
        {songByIdData?.coverSong.map((coverInfo) => {
          return (
            <div key={coverInfo._id}>
              <SongCoverNew
                artist={coverInfo?.coverArtistName}
                backgroundImg={coverInfo?.backgroundUrl}
                state={coverInfo}
                likes={coverInfo?.likes.length}
                views={coverInfo?.views}
                id={coverInfo._id}
              />
            </div>
          );
        })}
      </SongCoverVideoContainer>
    </div>
  );
}
