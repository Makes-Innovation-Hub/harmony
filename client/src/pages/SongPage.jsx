import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics/Lyrics";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import Youtube from "../components/Youtube/Youtube";
import UploadCoverModal from "../components/UploadButton/UploadCoverModal";
import { useGetSongByIdQuery } from "../api/addCoverToSongApi";
import CoverSongData from "../components/CoverSongData/CoverSongData";
import Animation from "../components/Animation/Animation.component";
import translatingGif from "../assets/animations/translating-animation.gif";

function SongPage() {
  const { id } = useParams();
  const { data: songByIdData, isSuccess: fetchedSongData } =
    useGetSongByIdQuery(id, {
      skip: !id,
    });

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
        <Animation
          animationGif={translatingGif}
          animationText={["Loading song ..."]}
        />
      )}
    </>
  );
}

export default SongPage;
