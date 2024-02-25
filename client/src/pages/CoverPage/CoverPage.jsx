import React from "react";
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
import { useAddViewMutation } from "../../api/viewsAndLikesApi";

export default function CoverPage() {
  const { state: coverData } = useLocation();
  const [addView] = useAddViewMutation();

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
            handleAddView={() => addView(coverData?._id)}
          />
          <VideoInfo className="video-info">
            <SameLine>
              <img src={shareSvg} alt="share svg" />
              <p>Share</p>
            </SameLine>
            <p>{coverData?.views} Views</p>
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
