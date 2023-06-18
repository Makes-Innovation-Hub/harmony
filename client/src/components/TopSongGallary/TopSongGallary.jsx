import { useEffect } from "react";
import { useTopSongsGlobalContext } from "../../../context/topSongsContext";
import {
  ImageBoxContainer,
  SongGallary,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
} from "./TopSongGallaryStyle";
import { useState } from "react";
import ImageBoxWithDetails from "./ImageBoxWithDetails";
import { useGetTopHebrewSongsQuery } from "../../api/hebrewApiSlice";
import { useGetTopArabicSongsQuery } from "../../api/arabicApiSlice";
import { usePostGoogleLyricsMutation } from "../../api/lyricsApiSlice";

import { useTranslation } from "react-i18next";

export default function TopSongGallary() {
  const { setSongLyrics, setSongDetails } = useTopSongsGlobalContext();

  // const [songDetails, setSongDetails] = useState({
  //   songName: "",
  //   artistName: "",
  //   coverArt: "",
  // });

  const { data: topHebrewSongs = [] } = useGetTopHebrewSongsQuery();
  const { data: topArabicSongs = [] } = useGetTopArabicSongsQuery();

  const [postGoogleLyrics, { data, isError, error, isSuccess }] =
    usePostGoogleLyricsMutation();

  const { t } = useTranslation();

  const handleSongLyricsClick = (songData) => {
    postGoogleLyrics(songData);

    console.log("work");
  };

  const handleSongDetailsClick = (artistName, songName, coverArt) => {
    setSongDetails({
      songName: songName,
      artistName: artistName,
      coverArt: coverArt,
    });
    console.log("toni!");
  };

  useEffect(() => {
    if (isSuccess && data.length > 0) {
      setSongLyrics(data);

      // (navigate("/Artur`s Page"))
      console.log("lyrics is:", data);
    }

    if (isError) {
      console.error(error);
    }
  }, [isError, isSuccess]);

  return (
    <SongGallary>
      <TopHSongCountainer>
        <Title>{t("top_hebrew")}</Title>
        <ImageBoxContainer>
          {topHebrewSongs.map((song, index) => {
            const songData = {
              songName: song.songName,
              singerName: song.artist,
            };
            return (
              <ImageBoxWithDetails
                key={index}
                img={song.coverArt}
                artist={song.artist}
                songName={song.songName}
                onClick={() => handleSongLyricsClick(songData)}
                onClick={() =>
                  handleSongDetailsClick(
                    song.artist,
                    song.coverArt,
                    song.songName
                  )
                }
              />
            );
          })}
        </ImageBoxContainer>
      </TopHSongCountainer>
      <TopASongCountainer>
        <Title>{t("top_arabic")}</Title>
        <ImageBoxContainer>
          {topArabicSongs.songsArr &&
            topArabicSongs.songsArr.map((song, index) => {
              const songData = {
                songName: song.song,
                singerName: song.artist,
              };
              return (
                <ImageBoxWithDetails
                  key={index}
                  img={song.coverArt}
                  artist={song.artist}
                  songName={song.song}
                  onClick={() => handleSongLyricsClick(songData)}
                />
              );
            })}
        </ImageBoxContainer>
      </TopASongCountainer>
    </SongGallary>
  );
}
