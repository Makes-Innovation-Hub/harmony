import React, { useRef, useCallback } from "react";
import Header from "../../components/Header/Header";
import * as S from "./CoverPage.styles";
import translatingGif from "../../assets/animations/translating-animation.gif";
import { useNavigate, useParams } from "react-router-dom";
import CoverPageYoutube from "../../components/CoverPageYoutube/CoverPageYoutube";
import ShareButton from "../../components/shareButton/ShareButton";
import SongAndSingerContainer from "../../components/SongAndSingerContainer/SongAndSingerContainer";
import GenericModal from "../../components/GenericModal/GenericModal";
import Animation from "../../components/Animation/Animation.component";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentContainer from "../../components/CommentContainer/CommentContainer";
import useModal from "../../hooks/useModal";
import useVideoComment from "../../hooks/useVideoComment";
import useVideoViews from "../../hooks/useVideoViews";
import useVideoLikes from "../../hooks/useVideoLikes";
import useCoverSong from "../../hooks/useCoverSong";

export default function CoverPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [
    currentUser,
    coverSong,
    coverSongSuccess,
    refetchOriginalSong,
    likesCount,
    setLikesCount,
    userHasLiked,
    setUserHasLiked,
  ] = useCoverSong(id);

  const [isModalOpen, openModal, closeModal] = useModal();
  const [isCommenting, commentRef, handleShowComment, handleAddComment] =
    useVideoComment(coverSong);
  const [playVideoDiv, updateViews] = useVideoViews(coverSong);
  const [toggleLikeOnServer] = useVideoLikes(coverSong, id);

  const debounceTimerRef = useRef(null);
  const clickCountRef = useRef(0);

  const debounceToggleLike = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      // Use clickCountRef.current to check the number of clicks
      if (clickCountRef.current % 2 !== 0) {
        toggleLikeOnServer();
      } else {
        refetchOriginalSong();
      }
      // Reset the counter after processing
      clickCountRef.current = 0;
    }, 200); // 200ms debounce time
  }, []);

  const goBackToOriginalSong = () => {
    navigate(`/song/${coverSong?.originalSongId}`);
  };

  function updateLikes() {
    setUserHasLiked((prev) => !prev); // Optimistically toggle the like state
    setLikesCount((prev) => prev + (userHasLiked ? -1 : 1));
    clickCountRef.current += 1; // Update the click counter
    debounceToggleLike();
  }

  return (
    <main>
      <Header />
      {coverSong ? (
        <>
          <S.Section>
            <S.CoverArtistTitle>
              Cover by {coverSong?.coverArtistName}
            </S.CoverArtistTitle>

            <S.BigContainer>
              <SongAndSingerContainer
                goBackToOriginalSong={goBackToOriginalSong}
                songCoverImg={coverSong?.originalSongCover}
                originalArtistName={coverSong?.originalArtist}
                originalSongName={coverSong?.originalSongName}
              />

              <div>
                <CoverPageYoutube
                  youtubeUrl={coverSong?.youtubeUrl}
                  handleAddView={updateViews}
                  playVideoDiv={playVideoDiv}
                />
                <VideoInfo
                  handleShowComment={handleShowComment}
                  likesCount={likesCount}
                  openModal={openModal}
                  updateLikes={updateLikes}
                  updatedCoverSong={coverSong}
                  userHasLiked={userHasLiked}
                />
              </div>
            </S.BigContainer>
            <CommentContainer
              commentRef={commentRef}
              currentUser={currentUser}
              handleAddComment={handleAddComment}
              isCommenting={isCommenting}
              updatedCoverSong={coverSong}
              updatedCoverSongSuccess={coverSongSuccess}
            />

            <GenericModal isOpen={isModalOpen} onRequestClose={closeModal}>
              <S.ShareMsg>Share this cover song with friends</S.ShareMsg>
              <ShareButton
                updatedCoverSong={coverSong}
                closeModal={closeModal}
              />
            </GenericModal>
          </S.Section>
        </>
      ) : (
        <Animation
          animationGif={translatingGif}
          animationText={["Loading Song Cover ..."]}
        />
      )}
    </main>
  );
}
