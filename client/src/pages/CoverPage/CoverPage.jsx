import React, { useEffect, useState } from "react";
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
} from "./CoverPage.styles";
import Youtube from "../../components/Youtube/Youtube";
import shareSvg from "../../assets/svgs/share.svg";
import likeSvg from "../../assets/svgs/thumps-up.svg";
import { useLocation } from "react-router-dom";
import {
  useAddViewMutation,
  useGetSongByIdQuery,
} from "../../api/viewsAndLikesApi";

export default function CoverPage() {
  const { state: coverData } = useLocation();
  const [addView] = useAddViewMutation();
  const { data: updatedCoverSong } = useGetSongByIdQuery(coverData?._id);

  console.log(updatedCoverSong);
  function addViewToCover() {
    addView(coverData?._id);
    console.log(`VIEW ++`);
  }

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
          <Youtube
            youtubeUrl={coverData?.youtubeUrl}
            handleAddView={addViewToCover}
          />
          <VideoInfo className="video-info">
            <SameLine>
              <img src={shareSvg} alt="share svg" />
              <p>Share</p>
            </SameLine>
            <p>{updatedCoverSong?.views} views</p>
            <SameLine>
              <p>{coverData?.likes.length} Likes </p>
              <img src={likeSvg} alt="share svg" />
            </SameLine>
          </VideoInfo>
        </div>
      </BigContainer>
    </main>
  );
}
