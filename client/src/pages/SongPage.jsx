import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics/Lyrics";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import Youtube from "../components/Youtube/Youtube";
import { useGetSongByIdQuery } from "../api/addCoverToSongApi";
import CoverSongData from "../components/CoverSongData/CoverSongData";
import * as S from "./SongPageStyles";
import { useState } from "react";
import GenericModal from "../components/GenericModal/GenericModal";
import UploadCoverForm from "../components/UploadButton/UploadCoverForm";
import Animation from "../components/Animation/Animation.component";
import translatingGif from "../assets/animations/translating-animation.gif";

function SongPage() {
  const songData = useLocation().state;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: songByIdData } = useGetSongByIdQuery(songData?._id, {
    skip: !songData?._id,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { id } = useParams();
  const { data: songByIdData, isSuccess: fetchedSongData } =
    useGetSongByIdQuery(id, {
      skip: !id,
    });

  return (
    <>
      <Header />
      <S.SongPageContainer>
        <S.SongInfoAndVideoContainer>
          <S.SongInfoContainer>
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
          </S.SongInfoContainer>
          <Youtube
            songName={songData.name.hebrew}
            artistName={songData.artist.name.hebrew}
            youtubeUrl={songData.youtubeURL}
          />
        </S.SongInfoAndVideoContainer>

        <S.UploadCoverButton onClick={openModal}>
          Upload Cover
        </S.UploadCoverButton>

        <GenericModal isOpen={isModalOpen} onRequestClose={closeModal}>
          <UploadCoverForm
            originalArtist={songData.artist.name.english}
            originalLang={songData.originalLang}
            originalSongCover={songData.coverArt}
            originalSongName={songData.name.english}
            originalSongId={songData._id}
            closeModal={closeModal}
          />
        </GenericModal>

        <CoverSongData songData={songData} songByIdData={songByIdData} />
      </S.SongPageContainer>
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
