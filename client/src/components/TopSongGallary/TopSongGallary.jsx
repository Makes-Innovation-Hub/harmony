import { useEffect } from "react";
import { useTopSongsGlobalContext } from "../../../context/topSongsContext";
import {
  ImageBoxContainer,
  SongGallary,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
} from "./TopSongGallaryStyle";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import ImageBoxWithDetails from "./ImageBoxWithDetails";
import { useGetTopHebrewSongsQuery } from "../../api/hebrewApiSlice";
import { useGetTopArabicSongsQuery } from "../../api/arabicApiSlice";
import { usePostGoogleLyricsMutation } from "../../api/lyricsApiSlice";

import { useTranslation } from "react-i18next";

export default function TopSongGallary() {
  const { setSongLyrics, setSongDetails, songLyrics } =
    useTopSongsGlobalContext();

  const navigate = useNavigate();

  const { data: topHebrewSongs = [] } = useGetTopHebrewSongsQuery();
  const { data: topArabicSongs = [] } = useGetTopArabicSongsQuery();

  const [postGoogleLyrics, { data, isError, error, isSuccess }] =
    usePostGoogleLyricsMutation();

  const { t } = useTranslation();

  const handleSongLyricsClick = (songData) => {
    postGoogleLyrics(songData);
    console.log("song data:", songData);
  };

  useEffect(() => {
    if (isSuccess && data.length > 0) {
      setSongLyrics(data);
      console.log("data:", data);
      navigate("/song");
    }

    if (isError) {
      console.error(error);
    }
  }, [isError, isSuccess]);

  console.log("song lyrics from Top song componenet:", songLyrics);

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
                // onClick={() =>
                //   handleSongDetailsClick(
                //     song.artist,
                //     song.coverArt,
                //     song.songName
                //   )
                // }
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
