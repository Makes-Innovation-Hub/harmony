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

  const playVideoRef = useRef();

  useEffect(() => {
    refetch();
  }, [updatedCoverSong]);

  function updateViews() {
    addView(coverData?._id);

    // if (playVideoRef.current) {
    //   playVideoRef.current.contentWindow.postMessage(
    //     JSON.stringify({
    //       event: "command",
    //       func: "playVideo",
    //       args: [],
    //     }),
    //     "*"
    //   );
    // }
    // console.log(playVideoRef.current.contentWindow);
    setPlayVideoDiv(true);
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
          <CoverPageYoutube
            youtubeUrl={coverData?.youtubeUrl}
            handleAddView={updateViews}
            playVideoDiv={playVideoDiv}
            playVideoRef={playVideoRef}
          />
          <VideoInfo className="video-info">
            <SameLine>
              <img src={shareSvg} alt="share svg" />
              <p>Share</p>
            </SameLine>
            <p>{updatedCoverSong?.views} views</p>
            <SameLine>
              <p>{updatedCoverSong?.likes.length} Likes </p>
              <img
                onClick={() => toggleLike(coverData?._id)}
                src={likeSvg}
                alt="share svg"
              />
            </SameLine>
          </VideoInfo>
        </div>
      </BigContainer>
    </main>
  );
}
