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
import { t } from "i18next";

export default function CoverPage() {
  return (
    <main>
      <Header />
      <CoverArtistTitle>Cover by [Artist Name]</CoverArtistTitle>

      <BigContainer>
        <ArtistContainer>
          <div>
            <SongCover
              src="https://i.scdn.co/image/ab67616d0000b273d3ee29593d43accb1bd79e72"
              alt="Artist avatar"
            />
          </div>

          <SongAndSingerContainer>
            <SongName>Haygely Mawgow3</SongName>
            <OriginalArtistName>Tamer Ashour</OriginalArtistName>
          </SongAndSingerContainer>
        </ArtistContainer>

        <div>
          <Youtube youtubeUrl={"5_5PtfmoIQk"} />
          <VideoInfo className="video-info">
            <SameLine>
              <img src={shareSvg} alt="share svg" />
              <p>Share</p>
            </SameLine>
            <p>0 Views</p>
            <SameLine>
              <p>0 Likes </p>
              <img src={likeSvg} alt="share svg" />
            </SameLine>
          </VideoInfo>
        </div>
      </BigContainer>
    </main>
  );
}
