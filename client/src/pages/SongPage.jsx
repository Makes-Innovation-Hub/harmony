import SongGallary from "../components/SongGallary";
import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics"

function SongPage() {
  return (
    <>
      <SongDetails />
      <SongGallary />
      <Lyrics/>
    </>
  );
}

export default SongPage;
