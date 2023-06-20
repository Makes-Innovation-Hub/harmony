import Header from "../components/Header/Header.jsx";
import SongDetails from "../components/songDetails/SongDetails";
import { useLocation } from "react-router-dom";
import Lyrics from "../components/Lyrics/Lyrics.jsx";
import { useGetSongDataQuery } from "../api/songApiSlice.js";

function SongPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const songName = queryParams.get("song");
  const artistName = queryParams.get("artist");

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
