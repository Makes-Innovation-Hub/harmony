import SongGallary from "../components/SongGallary";
import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics/Lyrics";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";

function SongPage() {
  const songData = useLocation().state;
  console.log("songData in song page", songData);

  return (
    <>
      <Header />
      <SongDetails
        img={songData.coverArt}
        artist={songData.artist.name.english}
        songName={songData.name.english}
      />
      <Lyrics lyrics={songData.lyrics} name={songData.name} />
    </>
  );
}

export default SongPage;
