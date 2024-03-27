import React, { useEffect, useRef, useState, useCallback } from "react";
import Header from "../../components/Header/Header";
import * as S from "./CoverPage.styles";
import likeSvg from "../../assets/svgs/thumps-up.svg";
import likedSvg from "../../assets/svgs/thumbs-up-liked.svg";
import Image from "../../components/Image/Image";
import translatingGif from "../../assets/animations/translating-animation.gif";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddCommentMutation,
  useAddViewMutation,
  useGetCoverSongByIdQuery,
  useToggleLikeMutation,
} from "../../api/viewsAndLikesApi";
import { useGetSongByIdQuery } from "../../api/addCoverToSongApi";
import CoverPageYoutube from "../../components/CoverPageYoutube/CoverPageYoutube";
import { useSelector } from "react-redux";
import ShareButton from "../../components/shareButton/ShareButton";
import AddComment from "../../components/AddComment/AddComment";
import CommentSection from "../../components/CommentSection/CommentSection";
import SongAndSingerContainer from "../../components/SongAndSingerContainer/SongAndSingerContainer";
import GenericModal from "../../components/GenericModal/GenericModal";
import Animation from "../../components/Animation/Animation.component";
import { useGetTopCoversQuery } from "../../api/topCoversApi";

export default function CoverPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.user);

  const { data: updatedCoverSong, isSuccess: updatedCoverSongSuccess } =
    useGetCoverSongByIdQuery(id);
  const { refetch } = useGetSongByIdQuery(updatedCoverSong?.originalSongId, {
    skip: !updatedCoverSong?.originalSongId,
  });
  const [addView] = useAddViewMutation();
  const [toggleLike, { isSuccess: toggleLikeIsSuccess }] =
    useToggleLikeMutation();
  const [addComment] = useAddCommentMutation();
  const { refetch: refetchTopCovers } = useGetTopCoversQuery(
    updatedCoverSong?.originalLanguage
  );

  const [playVideoDiv, setPlayVideoDiv] = useState(false);
  const [likesCount, setLikesCount] = useState(
    updatedCoverSong?.likes.length || 0
  );
  const [userHasLiked, setUserHasLiked] = useState(
    updatedCoverSong?.likes.includes(currentUser.id)
  );
  const [isCommenting, setIsCommenting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const commentRef = useRef();
  const debounceTimerRef = useRef(null);
  const clickCountRef = useRef(0);

  useEffect(() => {
    if (updatedCoverSong?.originalSongId) {
      refetch();
    }
  }, [updatedCoverSong, refetch]);

  useEffect(() => {
    if (toggleLikeIsSuccess) {
      refetchTopCovers();
    }
  }, [toggleLikeIsSuccess]);

  useEffect(() => {
    setLikesCount(updatedCoverSong?.likes.length || 0);
    setUserHasLiked(updatedCoverSong?.likes.includes(currentUser.id));
  }, [updatedCoverSong, currentUser.id]);

  useEffect(() => {
    if (isCommenting) {
      commentRef.current.focus();
    }
  }, [isCommenting]);

  const debounceToggleLike = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      // Use clickCountRef.current to check the number of clicks
      if (clickCountRef.current % 2 !== 0) {
        toggleLikeOnServer();
      } else {
        refetch();
      }
      // Reset the counter after processing
      clickCountRef.current = 0;
    }, 200); // 200ms debounce time
  }, []);

  async function toggleLikeOnServer() {
    try {
      await toggleLike(id);
    } catch (error) {
      console.error("Failed to synchronize like state with server:", error);
    }
  }

  const goBackToOriginalSong = () => {
    navigate("/translating", {
      state: {
        artist: updatedCoverSong?.originalArtist,
        song: updatedCoverSong?.originalSongName,
        coverArt: updatedCoverSong?.originalSongCover,
      },
    });
  };

  function updateViews() {
    addView(updatedCoverSong?._id);
    setPlayVideoDiv(true);
  }

  function updateLikes() {
    setUserHasLiked((prev) => !prev); // Optimistically toggle the like state
    setLikesCount((prev) => prev + (userHasLiked ? -1 : 1));
    clickCountRef.current += 1; // Update the click counter
    debounceToggleLike();
  }

  function handleShowComment() {
    setIsCommenting((prev) => !prev);
  }

  function handleAddComment() {
    addComment({
      id: updatedCoverSong?._id,
      content: commentRef?.current.value,
    });
    commentRef.current.value = "";
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <Header />
      {updatedCoverSong ? (
        <>
          <S.Section>
            <S.CoverArtistTitle>
              Cover by {updatedCoverSong?.coverArtistName}
            </S.CoverArtistTitle>

            <S.BigContainer>
              <SongAndSingerContainer
                goBackToOriginalSong={goBackToOriginalSong}
                songCoverImg={updatedCoverSong?.originalSongCover}
                originalArtistName={updatedCoverSong?.originalArtist}
                originalSongName={updatedCoverSong?.originalSongName}
              />

              <div>
                <CoverPageYoutube
                  youtubeUrl={updatedCoverSong?.youtubeUrl}
                  handleAddView={updateViews}
                  playVideoDiv={playVideoDiv}
                />
                <S.VideoInfo>
                  <S.SameLine onClick={openModal}>
                    <S.HoverCursor>
                      <Image name={"shareCover"} alt={"share  svg"} />

                      <p>Share</p>
                    </S.HoverCursor>
                  </S.SameLine>
                  <p>{updatedCoverSong?.views} Views</p>
                  <S.SameLine onClick={handleShowComment}>
                    <S.HoverCursor>
                      <Image name={"commentCover"} alt={"comment svg"} />
                    </S.HoverCursor>
                  </S.SameLine>
                  <S.SameLine>
                    <p className="likes">{likesCount} Likes</p>
                    <div onClick={updateLikes}>
                      <S.LikedCoverButton
                        $likedCover={userHasLiked}
                        src={userHasLiked ? likedSvg : likeSvg}
                        alt="like svg"
                      />
                    </div>
                  </S.SameLine>
                </S.VideoInfo>
              </div>
            </S.BigContainer>

            <S.CommentSection>
              {updatedCoverSongSuccess && (
                <CommentSection arrayToMap={updatedCoverSong?.comments} />
              )}

              {isCommenting && (
                <AddComment
                  avatar={currentUser?.avatar}
                  commentRef={commentRef}
                  handleAddComment={handleAddComment}
                />
              )}
            </S.CommentSection>

            <GenericModal isOpen={isModalOpen} onRequestClose={closeModal}>
              <S.ShareMsg>Share this cover song with friends</S.ShareMsg>
              <ShareButton
                updatedCoverSong={updatedCoverSong}
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
