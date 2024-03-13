import React, { useEffect, useRef, useState } from "react";
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
import ShareButton from "../../components/ShareButton/ShareButton";
import AddComment from "../../components/AddComment/AddComment";
import CommentSection from "../../components/CommentSection/CommentSection";
import SongAndSingerContainer from "../../components/SongAndSingerContainer/SongAndSingerContainer";

export default function CoverPage() {
  const { state: coverData } = useLocation();
  const navigate = useNavigate();

  const [addView] = useAddViewMutation();
  const [toggleLike] = useToggleLikeMutation();
  const [addComment] = useAddCommentMutation();
  const { data: updatedCoverSong, isSuccess: updatedCoverSongSuccess } =
    useGetCoverSongByIdQuery(coverData?._id);
  const { refetch } = useGetSongByIdQuery(updatedCoverSong?.originalSongId, {
    skip: !updatedCoverSong?.originalSongId,
  });

  const [playVideoDiv, setPlayVideoDiv] = useState(false);
  const [likedVideo, setLikedVideo] = useState(false);
  const [shareFallback, setShareFallback] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false);
  const commentRef = useRef();

  const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (updatedCoverSong?.originalSongId) {
      refetch();
    }
  }, [updatedCoverSong]);

  useEffect(() => {
    if (updatedCoverSong?.likes.includes(currentUser.id)) {
      setLikedVideo(true);
    } else {
      setLikedVideo(false);
    }
  }, [updatedCoverSong]);

  useEffect(() => {
    if (isCommenting) {
      commentRef.current.focus();
    }
  }, [isCommenting]);

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
    toggleLike(coverData?._id);
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

  const url = `https://youtu.be/${coverData?.youtubeUrl}`;
  const title = `Check out this cover song that has been created on this song: ${coverData?.originalSongName}`;

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
            {shareFallback && <ShareButton title={title} url={url} />}
            <S.SameLine>
              <p>{updatedCoverSong?.views} Views</p>
            </S.SameLine>
            <S.SameLine onClick={handleShowComment}>
              <img src={commentSvg} alt="comment svg" />
            </S.SameLine>
            <S.SameLine>
              <p className="likes">{updatedCoverSong?.likes.length} Likes </p>
              <div onClick={updateLikes}>
                {likedVideo ? (
                  <S.LikedCoverButton
                    $likedCover={likedVideo}
                    src={likedSvg}
                    alt="liked svg"
                  />
                ) : (
                  <S.LikedCoverButton
                    $likedCover={likedVideo}
                    src={likeSvg}
                    alt="not liked svg"
                  />
                )}
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
