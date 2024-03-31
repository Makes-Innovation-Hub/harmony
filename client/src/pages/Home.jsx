import React from "react";
import Header from "../components/Header/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import Tagline from "../components/Tagline/Tagline.component";
import * as S from "./NotFoundPageStyles.js";
import { useGetTopSongsQuery } from "../api/topSongsSlice.js";
import translatingGif from "../assets/animations/translating-animation.gif";
import Animation from "../components/Animation/Animation.component.jsx";
import SongGallery from "../components/SongGallery/SongGallery.jsx";
import ImageBoxWithDetails from "../components/SongGallery/ImageBoxWithDetails.jsx";
import HomeCovers from "../components/HomeCovers/HomeCovers.jsx";
import { useGetTopCoversQuery } from "../api/topCoversApi.js";
import { HomePageContainer } from "./HomeStyles.js";
import ImageBoxWithDetailsPlaylist from "../components/topPlaylist/ImageBoxWithDetailsPlaylist.jsx";
import { useGetAllPlaylistDataQuery } from "../api/playlistApiSlice.js";

export default function Home() {
  const { data: topSongsAll = [], isLoading: topSongsIsLoading } =
    useGetTopSongsQuery();
  const { data: arabicTopCoversData } = useGetTopCoversQuery("arabic");
  const { data: hebrewTopCoversData } = useGetTopCoversQuery("hebrew");
  const { data: playlistData } = useGetAllPlaylistDataQuery();

  const hebrewSongs =
    topSongsAll.data &&
    topSongsAll.data.hebrewSongs.map((song, index) => (
      <ImageBoxWithDetails
        key={index}
        img={song.coverArt}
        artist={song.artist}
        songName={song.song}
      />
    ));

  const arabicSongs =
    topSongsAll.data &&
    topSongsAll.data.arabicSongs.map((song, index) => (
      <ImageBoxWithDetails
        key={index}
        img={song.coverArt}
        artist={song.artist}
        songName={song.song}
      />
    ));

  const hebrewCovers = hebrewTopCoversData?.map((coverInfo) => (
    <HomeCovers
      key={coverInfo?._id}
      id={coverInfo?._id}
      artist={coverInfo?.coverArtistName}
      backgroundImg={coverInfo?.backgroundUrl}
      state={coverInfo}
      likes={coverInfo?.likes.length}
      views={coverInfo?.views}
    />
  ));

  const arabicCovers = arabicTopCoversData?.map((coverInfo) => (
    <HomeCovers
      key={coverInfo?._id}
      id={coverInfo?._id}
      artist={coverInfo?.coverArtistName}
      backgroundImg={coverInfo?.backgroundUrl}
      state={coverInfo}
      likes={coverInfo?.likes.length}
      views={coverInfo?.views}
    />
  ));

  const hebrewPlayList = playlistData?.hebrewPlaylists.map((mix, index) => (
    <ImageBoxWithDetailsPlaylist
      img={mix.coverArt}
      mixName={mix.name}
      genre={mix.genre}
      playlistId={mix.id}
      playlistLanguage={mix.language}
      key={index}
    />
  ));

  const arabicPlayList = playlistData?.arabicPlaylists.map((mix, index) => (
    <ImageBoxWithDetailsPlaylist
      img={mix.coverArt}
      mixName={mix.name}
      genre={mix.genre}
      playlistId={mix.id}
      playlistLanguage={mix.language}
      key={index}
    />
  ));

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

          <HomePageContainer>
            <SongGallery
              smallTitle={["top_hebrew", "top_arabic"]}
              dataToMap1={hebrewSongs}
              dataToMap2={arabicSongs}
              sectionTitle={"Harmony Top Songs"}
            />

            <SongGallery
              smallTitle={[
                "Top Hebrew Covers in Arabic",
                "Top Arabic Covers in Hebrew",
              ]}
              dataToMap1={hebrewCovers}
              dataToMap2={arabicCovers}
              sectionTitle={"Harmony Covers"}
            />

            <SongGallery
              smallTitle={["Your Top Hebrew mixes", "Your Top Arabic mixes"]}
              dataToMap1={hebrewPlayList}
              dataToMap2={arabicPlayList}
              sectionTitle={"Harmony Playlists"}
            />
          </HomePageContainer>
        </>
      )}
    </>
  );
}
