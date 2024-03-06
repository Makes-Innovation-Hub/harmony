import React, { useEffect, useState } from "react";
import { EmailShareButton, FacebookShareButton } from "react-share";
import Header from "../../components/Header/Header";
import {
  SongCover,
  ArtistContainer,
  CoverArtistTitle,
  SongName,
  OriginalArtistName,
  VideoInfo,
  SameLine,
  BigContainer,
  SongAndSingerContainer,
  LikedCoverButton,
} from "./CoverPage.styles";
import shareSvg from "../../assets/svgs/share.svg";
import likeSvg from "../../assets/svgs/thumps-up.svg";
import likedSvg from "../../assets/svgs/thumbs-up-liked.svg";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAddViewMutation,
  useGetCoverSongByIdQuery,
  useToggleLikeMutation,
} from "../../api/viewsAndLikesApi";
import { useGetSongByIdQuery } from "../../api/addCoverToSongApi";
import CoverPageYoutube from "../../components/CoverPageYoutube/CoverPageYoutube";
import { useSelector } from "react-redux";

export default function CoverPage() {
  const { state: coverData } = useLocation();
  const navigate = useNavigate();

  const [addView] = useAddViewMutation();
  const [toggleLike] = useToggleLikeMutation();
  const { data: updatedCoverSong } = useGetCoverSongByIdQuery(coverData?._id);
  const { refetch } = useGetSongByIdQuery(updatedCoverSong?.originalSongId, {
    skip: !updatedCoverSong?.originalSongId,
  });

  const [playVideoDiv, setPlayVideoDiv] = useState(false);
  const [likedVideo, setLikedVideo] = useState(false);

  const currentUser = useSelector((state) => state.auth.user);

  const goBackToOriginalSong = () => {
    navigate("/translating", {
      state: {
        artist: coverData?.originalArtist,
        song: coverData?.originalSongName,
        coverArt: coverData?.originalSongCover,
      },
    });
  };

  useEffect(() => {
    if (updatedCoverSong?.originalSongId) {
      refetch();
    }
  }, [updatedCoverSong]);

  function updateViews() {
    addView(coverData?._id);
    setPlayVideoDiv(true);
  }

  function updateLikes() {
    toggleLike(coverData?._id);
  }
  const [showShareOptions, setShowShareOptions] = useState(false);
  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions);
  };

  useEffect(() => {
    if (updatedCoverSong?.likes.includes(currentUser.id)) {
      setLikedVideo(true);
    } else {
      setLikedVideo(false);
    }
  }, [updatedCoverSong]);

  return (
    <main>
      <Header />
      <CoverArtistTitle>Cover by {coverData?.coverArtistName}</CoverArtistTitle>

      <BigContainer>
        <ArtistContainer>
          <div>
            <SongCover
              onClick={goBackToOriginalSong}
              src={coverData?.originalSongCover}
              alt="Original song cover art"
            />
          </div>

          <SongAndSingerContainer>
            <SongName onClick={goBackToOriginalSong}>
              {coverData?.originalSongName}
            </SongName>
            <OriginalArtistName onClick={goBackToOriginalSong}>
              {coverData?.originalArtist}
            </OriginalArtistName>
          </SongAndSingerContainer>
        </ArtistContainer>

        <div>
          <CoverPageYoutube
            youtubeUrl={coverData?.youtubeUrl}
            handleAddView={updateViews}
            playVideoDiv={playVideoDiv}
          />
          <VideoInfo>
            <SameLine onClick={toggleShareOptions}  style={{ cursor: 'pointer', position: 'relative' }}>
              <img src={shareSvg} alt="share svg" />

              <p>Share</p>
              {showShareOptions && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    zIndex: 1,
                    width: "auto",
                    padding: "10px",
                  }}
                >
                  <EmailShareButton
                    url={window.location.href}
                    subject={coverData?.originalSongName}
                    style={{ margin: "5px", display: "block" }}
                  >
                    Email
                  </EmailShareButton>
                  <FacebookShareButton
                    url={window.location.href}
                    quote={coverData?.originalSongName}
                    style={{ margin: "5px", display: "block" }}
                  >
                    Facebook
                  </FacebookShareButton>
                  {/* Add more share buttons as needed */}
                </div>
              )}
            </SameLine>
            <p>{updatedCoverSong?.views} views</p>
            <SameLine>
              <p className="likes">{updatedCoverSong?.likes.length} Likes </p>
              <div onClick={updateLikes}>
                {likedVideo ? (
                  <LikedCoverButton
                    $likedCover={likedVideo}
                    src={likedSvg}
                    alt="liked svg"
                  />
                ) : (
                  <LikedCoverButton
                    $likedCover={likedVideo}
                    src={likeSvg}
                    alt="not liked svg"
                  />
                )}
              </div>
            </SameLine>
          </VideoInfo>
        </div>
      </BigContainer>
    </main>
  );
}
