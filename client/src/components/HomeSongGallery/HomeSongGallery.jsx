import React from "react";
import { useGetTopCoversQuery } from "../../api/topCoversApi";
import { useGetAllPlaylistDataQuery } from "../../api/playlistApiSlice";
import { useGetTopSongsQuery } from "../../api/topSongsSlice";
import ImageBoxWithDetails from "../SongGallery/ImageBoxWithDetails";
import HomeCovers from "../HomeCovers/HomeCovers";
import ImageBoxWithDetailsPlaylist from "../topPlaylist/ImageBoxWithDetailsPlaylist";
import SongGallery from "../SongGallery/SongGallery";
import { HomePageContainer } from "../../pages/HomeStyles";

const HomeSongGallery = () => {
  const { data: topSongsAll = [] } = useGetTopSongsQuery();
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
  );
};

export default HomeSongGallery;