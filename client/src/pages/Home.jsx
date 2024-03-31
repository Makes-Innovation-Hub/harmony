import React from "react";
import Header from "../components/Header/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import Tagline from "../components/Tagline/Tagline.component";
import TopSongGallary from "../components/TopSongGallary/TopSongGallary";
import TopPlaylist from "../components/topPlaylist/topPlaylist";
import * as S from "./NotFoundPageStyles.js";
import HarmonyCovers from "../components/HarmonyCovers/HarmonyCovers";
import { useGetTopSongsQuery } from "../api/topSongsSlice.js";
import translatingGif from "../assets/animations/translating-animation.gif";
import Animation from "../components/Animation/Animation.component.jsx";

export default function Home() {
  const { isLoading: topSongsIsLoading } = useGetTopSongsQuery();
  return (
    <>
      <Header />
      {topSongsIsLoading ? (
        <Animation
          animationGif={translatingGif}
          animationText={["Loading Data..."]}
        />
      ) : (
        <>
          <S.SeatchContainer>
            <Tagline />
            <HomeSearchBar />
          </S.SeatchContainer>

          <TopSongGallary />
          <HarmonyCovers />
          <TopPlaylist />
        </>
      )}
    </>
  );
}
