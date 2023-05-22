import SongGallary from "../components/SongGallary";
import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics"
import Header from "../components/Header"

function SongPage() {
  return (
    <>
      <Header/>
      <SongDetails />
      <Lyrics/>
    </>
  );
}

export default SongPage;
