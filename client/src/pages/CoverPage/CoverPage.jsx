import React, { useEffect, useRef, useState, useCallback } from "react";
import Header from "../../components/Header/Header";
import * as S from "./CoverPage.styles";
import shareSvg from "../../assets/svgs/share.svg";
import likeSvg from "../../assets/svgs/thumps-up.svg";
import likedSvg from "../../assets/svgs/thumbs-up-liked.svg";
import commentSvg from "../../assets/svgs/comment.svg";
import { useLocation, useNavigate } from "react-router-dom";
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

export default function CoverPage() {
  const { state: coverData } = useLocation();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.user);

  const [addView] = useAddViewMutation();
  const [toggleLike] = useToggleLikeMutation();
  const [addComment] = useAddCommentMutation();
  const { data: updatedCoverSong, isSuccess: updatedCoverSongSuccess } =
    useGetCoverSongByIdQuery(coverData?._id);
  const { refetch } = useGetSongByIdQuery(updatedCoverSong?.originalSongId, {
    skip: !updatedCoverSong?.originalSongId,
  });

  const [playVideoDiv, setPlayVideoDiv] = useState(false);
  const [likesCount, setLikesCount] = useState(
    updatedCoverSong?.likes.length || 0
  );
  const [userHasLiked, setUserHasLiked] = useState(
    updatedCoverSong?.likes.includes(currentUser.id)
  );
  const [shareFallback, setShareFallback] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const commentRef = useRef();
  const debounceTimerRef = useRef(null);
  const clickCountRef = useRef(0);

  useEffect(() => {
    if (updatedCoverSong?.originalSongId) {
      refetch();
    }
  }, [updatedCoverSong, refetch]);

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
  }, []); // Removed dependencies to prevent re-creation of the callback

  async function toggleLikeOnServer() {
    try {
      await toggleLike(coverData?._id);
    } catch (error) {
      console.error("Failed to synchronize like state with server:", error);
    }
  }

  const goBackToOriginalSong = () => {
    navigate("/translating", {
      state: {
        artist: coverData?.originalArtist,
        song: coverData?.originalSongName,
        coverArt: coverData?.originalSongCover,
      },
    });
  };

  function updateViews() {
    addView(coverData?._id);
    setPlayVideoDiv(true);
  }

  function updateLikes() {
    setUserHasLiked((prev) => !prev); // Optimistically toggle the like state
    setLikesCount((prev) => prev + (userHasLiked ? -1 : 1));
    clickCountRef.current += 1; // Update the click counter
    debounceToggleLike();
  }

  const toggleShareOptions = () => {
    setShareFallback((prev) => !prev);
  };

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

  return (
    <main>
      <Header />
      <S.CoverArtistTitle>
        Cover by {coverData?.coverArtistName}
      </S.CoverArtistTitle>

      <S.BigContainer>
        <SongAndSingerContainer
          goBackToOriginalSong={goBackToOriginalSong}
          songCoverImg={coverData?.originalSongCover}
          originalArtistName={coverData?.originalArtist}
          originalSongName={coverData?.originalSongName}
        />

        <div>
          <CoverPageYoutube
            youtubeUrl={coverData?.youtubeUrl}
            handleAddView={updateViews}
            playVideoDiv={playVideoDiv}
          />
          <S.VideoInfo>
            <S.SameLine onClick={toggleShareOptions}>
              <img src={shareSvg} alt="share svg" />
              <p>Share</p>
            </S.SameLine>
            {shareFallback && <ShareButton coverData={coverData} />}
            <S.SameLine>
              <p>{updatedCoverSong?.views} Views</p>
            </S.SameLine>
            <S.SameLine onClick={handleShowComment}>
              <img src={commentSvg} alt="comment svg" />
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
    </main>
  );
}
