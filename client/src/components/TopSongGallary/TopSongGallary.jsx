import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./test.css";

import {
  SongGallary,
  TopHSongCountainer,
  TopASongCountainer,
  ImageBoxContainer,
  Title,
} from "./TopSongGallaryStyle";
import ImageBoxWithDetails from "./ImageBoxWithDetails";
import { useGetTopSongsQuery } from "../../api/topSongsSlice";
import { useTranslation } from "react-i18next";

export default function TopSongGallary() {
  const { data: topSongsAll = [] } = useGetTopSongsQuery();
  const { t } = useTranslation();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 750);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
    ],
  };

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 750);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSongs = (songs) =>
    songs.map((song, index) => (
      <ImageBoxWithDetails
        key={index}
        img={song.coverArt}
        artist={song.artist}
        songName={song.song}
      />
    ));

  return (
    <>
      <SongGallary>
        <TopHSongCountainer>
          <Title>{t("top_hebrew")}</Title>
          <ImageBoxContainer>
            {topSongsAll.data &&
              topSongsAll.data.hebrewSongs.map((song, index) => (
                <ImageBoxWithDetails
                  key={index}
                  img={song.coverArt}
                  artist={song.artist}
                  songName={song.song}
                />
              ))}
          </ImageBoxContainer>
        </TopHSongCountainer>

        <TopASongCountainer>
          <Title>{t("top_arabic")}</Title>
          <ImageBoxContainer>
            {topSongsAll.data &&
              topSongsAll.data.arabicSongs.map((song, index) => (
                <ImageBoxWithDetails
                  key={index}
                  img={song.coverArt}
                  artist={song.artist}
                  songName={song.song}
                />
              ))}
          </ImageBoxContainer>
        </TopASongCountainer>
      </SongGallary>
    </>
  );
}
