import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import Tagline from "../components/Tagline/Tagline.component";
import TopSongGallary from "../components/TopSongGallary/TopSongGallary";
import TopPlaylist from "../components/topPlaylist/topPlaylist";
import * as S from "./NotFoundPageStyles.js";
import Animation from "../components/Animation/Animation.component";
import translatingGif from "../assets/animations/translating-animation.gif";
import HarmonyCovers from "../components/HarmonyCovers/HarmonyCovers";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const handleLoadingData = (data) => {
    setLoading(!Object.values(data).every(Boolean));
  };

  return (
    <>
      <Header />
      <S.SeatchContainer>
        <Tagline />
      <HomeSearchBar />
      </S.SeatchContainer>

      {loading && (
        <Animation
          animationGif={translatingGif}
          animationText={["Loading songs, please wait..."]}
          style={{ width: "300px", height: "300px" }}
        />
      )}

      <TopSongGallary
        handleData={handleLoadingData}
        availableData={{
          TopSongGallary: loading,
          TopPlaylist: true,
          HarmonyCovers: true,
        }}
      />
      <HarmonyCovers
        handleData={handleLoadingData}
        availableData={{
          TopSongGallary: true,
          TopPlaylist: true,
          HarmonyCovers: loading,
        }}
      />
      <TopPlaylist
        handleData={handleLoadingData}
        availableData={{
          TopSongGallary: true,
          TopPlaylist: loading,
          HarmonyCovers: true,
        }}
      />
    </>
  );
}
