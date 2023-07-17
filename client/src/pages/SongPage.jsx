import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics/Lyrics";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import Youtube from "../youtube/youtube";

function SongPage() {
  const songData = useLocation().state;
  console.log("song data", songData);
  return (
    <>
      <Header />
      <SongDetails
        img={songData.coverArt}
        artist={songData.artist.name.english}
        songName={songData.name.english}
        originalLang={songData.originalLang}
      />
      <Lyrics
        originalLang={songData.originalLang}
        lyrics={songData.lyrics}
        name={songData.name}
      />
      <Youtube
        songName={songData.name.hebrew}
        artistName={songData.artist.name.hebrew}
      />
    </>
  );
}

export default SongPage;
