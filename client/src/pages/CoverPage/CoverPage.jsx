import React, { useEffect, useRef, useState } from "react";
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
  LikedCoverButtonWrapper,
} from "./CoverPage.styles";
import shareSvg from "../../assets/svgs/share.svg";
import likeSvg from "../../assets/svgs/thumps-up.svg";
import { useLocation } from "react-router-dom";
import {
  useAddViewMutation,
  useGetCoverSongByIdQuery,
  useToggleLikeMutation,
} from "../../api/viewsAndLikesApi";
import { useGetSongByIdQuery } from "../../api/addCoverToSongApi";
import CoverPageYoutube from "../../components/CoverPageYoutube/CoverPageYoutube";

export default function CoverPage() {
  const { state: coverData } = useLocation();
  const [addView] = useAddViewMutation();
  const [toggleLike] = useToggleLikeMutation();
  const { data: updatedCoverSong } = useGetCoverSongByIdQuery(coverData?._id);
  const { refetch } = useGetSongByIdQuery(updatedCoverSong?.originalSongId);
  const [playVideoDiv, setPlayVideoDiv] = useState(false);

  // console.log(coverData);

  useEffect(() => {
    refetch();
  }, [updatedCoverSong]);

  function updateViews() {
    addView(coverData?._id);
    setPlayVideoDiv(true);
  }

  function updateLikes() {
    toggleLike(coverData?._id);
  }

  // const usersThatLiked = coverData?.likes.map((id) => console.log(id));
  // get current user id
  // if(currentUser._id === usersThatLiked)
  // give LikedCoverButtonWrapper a prop which checks
  // if true give it background of cadetblue
  // if false give it transparent background

  return (
    <main>
      <Header />
      <CoverArtistTitle>Cover by {coverData?.coverArtistName}</CoverArtistTitle>

      <BigContainer>
        <ArtistContainer>
          <div>
            <SongCover
              src={coverData?.originalSongCover}
              alt="Original song cover"
            />
          </div>

          <SongAndSingerContainer>
            <SongName>{coverData?.originalSongName}</SongName>
            <OriginalArtistName>{coverData?.originalArtist}</OriginalArtistName>
          </SongAndSingerContainer>
        </ArtistContainer>

        <div>
          <CoverPageYoutube
            youtubeUrl={coverData?.youtubeUrl}
            handleAddView={updateViews}
            playVideoDiv={playVideoDiv}
          />
          <VideoInfo className="video-info">
            <SameLine>
              <img src={shareSvg} alt="share svg" />
              <p>Share</p>
            </SameLine>
            <p>{updatedCoverSong?.views} views</p>
            <SameLine>
              <p>{updatedCoverSong?.likes.length} Likes </p>
              <LikedCoverButtonWrapper onClick={updateLikes}>
                <LikedCoverButton src={likeSvg} alt="like svg" />
              </LikedCoverButtonWrapper>
            </SameLine>
          </VideoInfo>
        </div>
      </BigContainer>
    </main>
  );
}
