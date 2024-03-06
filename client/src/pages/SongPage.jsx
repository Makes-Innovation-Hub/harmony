import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics/Lyrics";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import Youtube from "../components/Youtube/Youtube";
import UploadCoverModal from "../components/UploadButton/UploadCoverModal";
import { useGetSongByIdQuery } from "../api/addCoverToSongApi";
import CoverSongData from "../components/CoverSongData/CoverSongData";
import { useParams } from "react-router-dom";

function SongPage() {
  const { id } = useParams();
  // console.log('id', id)
  // console.log('params', params)
  // console.log("TESTING ID:", _id);
  const songData = useLocation().state;
  console.log("TESTING SONG DATA:", songData);
  const { data: songByIdData, isSuccess: fetchedSongData } =
    useGetSongByIdQuery(id, {
      skip: !id,
    });
  console.log("songByIdData", songByIdData);
  // const { data: songByIdData } = useGetSongByIdQuery(songData?._id, {
  //   skip: !songData?._id,
  // });

  return (
    <>
      <Header />
      {fetchedSongData ? (
        <>
          <SongDetails
            img={songByIdData.coverArt}
            artist={songByIdData.artist.name.english}
            songName={songByIdData.name.english}
            originalLang={songByIdData.originalLang}
          />
          <Lyrics
            originalLang={songByIdData.originalLang}
            lyrics={songByIdData.lyrics}
            name={songByIdData.name}
          />

          <Youtube
            songName={songByIdData.name.hebrew}
            artistName={songByIdData.artist.name.hebrew}
            youtubeUrl={songByIdData.youtubeURL}
          />

          <UploadCoverModal
            originalArtist={songByIdData.artist.name.english}
            originalLang={songByIdData.originalLang}
            originalSongCover={songByIdData.coverArt}
            originalSongName={songByIdData.name.english}
            originalSongId={songByIdData._id}
          />

          <CoverSongData songData={songByIdData} songByIdData={songByIdData} />
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}

export default SongPage;
