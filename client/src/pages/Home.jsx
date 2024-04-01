import React from "react";
import Header from "../components/Header/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import Tagline from "../components/Tagline/Tagline.component";
import * as S from "./NotFoundPageStyles.js";
import { useGetTopSongsQuery } from "../api/topSongsSlice.js";
import translatingGif from "../assets/animations/translating-animation.gif";
import Animation from "../components/Animation/Animation.component.jsx";
import HomeSongGallery from "../components/HomeSongGallery/HomeSongGallery.jsx";

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
          <S.SearchContainer>
            <Tagline />
            <HomeSearchBar />
          </S.SearchContainer>

          <HomeSongGallery />
        </>
      )}
    </>
  );
}
