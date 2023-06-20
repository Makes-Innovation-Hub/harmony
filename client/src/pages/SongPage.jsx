import React from "react";
import Header from "../components/Header/Header.jsx";
import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics/Lyrics.jsx";
import { useLocation } from "react-router-dom";
import { useGetSongDataQuery } from "../api/songApiSlice.js";

function SongPage() {
  const location = useLocation();
  const { songName, artistName } = location.state;

  const { data } = useGetSongDataQuery({
    songName,
    artistName,
  });

  if (data) {
    const { lyrics, name, imgURL } = data;
    const titleData = {
      hebrew: name.hebrew,
      arabic: name.arabic,
    };

    return (
      <>
        <Header />
        <SongDetails
          artistName={artistName}
          songName={songName}
          imgURL={imgURL}
        />
        <Lyrics artist={artistName} title={titleData} lyrics={lyrics} />
      </>
    );
  }

  return null;
}

export default SongPage;
