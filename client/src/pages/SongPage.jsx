import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics/Lyrics";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import Youtube from "../components/Youtube/Youtube";
import UploadCoverModal from "../components/UploadButton/UploadCoverModal";
import { useGetSongByIdQuery } from "../api/addCoverToSongApi";
import CoverSongData from "../components/CoverSongData/CoverSongData";

function SongPage() {
  const songData = useLocation().state;
  const { data: songByIdData } = useGetSongByIdQuery(songData?._id, {
    skip: !songData?._id,
  });

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
        originalSongId={songData._id}
      />

      <CoverSongData songData={songData} songByIdData={songByIdData} />
    </>
  );
}

export default SongPage;
