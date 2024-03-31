import SongDetails from "../components/songDetails/SongDetails";
import Lyrics from "../components/Lyrics/Lyrics";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import Youtube from "../components/Youtube/Youtube";
import { useGetSongByIdQuery } from "../api/addCoverToSongApi";
import CoverSongData from "../components/CoverSongData/CoverSongData";
import * as S from "./SongPageStyles";
import GenericModal from "../components/GenericModal/GenericModal";
import UploadCoverForm from "../components/UploadButton/UploadCoverForm";
import Animation from "../components/Animation/Animation.component";
import translatingGif from "../assets/animations/translating-animation.gif";
import useModal from "../hooks/useModal";

function SongPage() {
  const [isModalOpen, openModal, closeModal] = useModal();

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
          <S.SongPageContainer>
            <S.SongInfoAndVideoContainer>
              <S.SongInfoContainer>
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
              </S.SongInfoContainer>
              <Youtube
                songName={songByIdData.name.hebrew}
                artistName={songByIdData.artist.name.hebrew}
                youtubeUrl={songByIdData.youtubeURL}
              />
            </S.SongInfoAndVideoContainer>

            <S.UploadCoverButton onClick={openModal}>
              Upload Cover
            </S.UploadCoverButton>

            <GenericModal isOpen={isModalOpen} onRequestClose={closeModal}>
              <UploadCoverForm
                originalArtist={songByIdData.artist.name.english}
                originalLang={songByIdData.originalLang}
                originalSongCover={songByIdData.coverArt}
                originalSongName={songByIdData.name.english}
                originalSongId={songByIdData._id}
                closeModal={closeModal}
              />
            </GenericModal>

            <CoverSongData songByIdData={songByIdData} />
          </S.SongPageContainer>
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
