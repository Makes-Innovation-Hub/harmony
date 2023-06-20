import SongGallary from "../components/SongGallary";
import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics/Lyrics";
import Header from "../components/Header/Header";

function SongPage() {
  const artist = "Electric Light Orchestra";
  const title = "Mr Blue Sky";
  return (
    <>
      <Header />
      <SongDetails />
      <Lyrics artist={artist} title={title} />
    </>
  );
}

export default SongPage;
