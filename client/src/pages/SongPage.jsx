import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics/Lyrics";
import Header from "../components/Header/Header";
import { Link, useLocation } from "react-router-dom";
import Youtube from "../components/Youtube/Youtube";
import UploadCoverModal from "../components/UploadButton/UploadCoverModal";
import SongCover from "../components/SongCover/SongCover";
import { CoversTitle } from "./SongPageStyles";

function SongPage() {
  const songData = useLocation().state;
  console.log(songData);
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
        youtubeUrl={songData.youtubeURL}
      />

      <UploadCoverModal
        originalArtist={songData.artist.name.english}
        originalLang={songData.originalLang}
        originalSongCover={songData.coverArt}
        originalSongName={songData.name.english}
      />

      {songData?.coverSong.length > 0 && <CoversTitle>Covers</CoversTitle>}

      {songData?.coverSong.map((coverInfo) => {
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
    </>
  );
}

export default SongPage;
