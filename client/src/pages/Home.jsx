import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import Tagline from "../components/Tagline/Tagline.component";
import TopSongGallary from "../components/TopSongGallary/TopSongGallary";
import TopPlaylist from "../components/topPlaylist/topPlaylist";
import Animation from "../components/Animation/Animation.component";
import translatingGif from "../assets/animations/translating-animation.gif";
import HarmonyCovers from "../components/HarmonyCovers/HarmonyCovers";

export default function Home() {
  const [availableData, setLoadingData] = useState({
    TopSongGallary: false,
    TopPlaylist: false,
    HarmonyCovers: false,
  });

  return (
    <>
      <Header />
      <Tagline />
      <HomeSearchBar />

      {!availableData.TopSongGallary && (
        <Animation
          animationGif={translatingGif}
          animationText={["Loading songs, please wait..."]}
          style={{ width: "300px", height: "300px" }}
        />
      )}

      {availableData.TopSongGallary && (
        <>
          <TopSongGallary
            handleData={setLoadingData}
            availableData={availableData}
          />
          {/* <HarmonyCovers handleData={setLoadingData}/>
          <TopPlaylist handleData={setLoadingData}/> */}
        </>
      )}
    </>
  );
}
