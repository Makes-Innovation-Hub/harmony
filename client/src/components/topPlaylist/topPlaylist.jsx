import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SongGallery,
  Playlist,
  TopHMixCountainer,
  TopAMixCountainer,
  Title,
  ImageBoxContainer,
} from "./PlaylistStyle";
import { useGetAllPlaylistDataQuery } from "../../api/playlistApiSlice";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import ImageBoxWithDetailsPlaylist from "./ImageBoxWithDetailsPlaylist";

const TopPlaylist = () => {
  const { data: playlistData, isSuccess } = useGetAllPlaylistDataQuery();
  const [hebrewMixData, setHebrewMixData] = useState([]);
  const [arabicMixData, setArabicMixData] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 750);

  useEffect(() => {
    if (isSuccess) {
      setHebrewMixData(playlistData.hebrewPlaylists);
      setArabicMixData(playlistData.arabicPlaylists);
    }
  }, [playlistData, isSuccess]);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 750);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { t } = useTranslation();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderPlaylists = (playlists) =>
    playlists.map((mix, index) => (
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
      {hebrewMixData.length > 0 && arabicMixData.length > 0 && (
        <SongGallery>
          <Playlist>{t("playlists")}</Playlist>
          <TopHMixCountainer>

            <Title>{t("top_hebrew_mixes")}</Title>
            <ImageBoxContainer>
              {hebrewMixData.map((mix, index) => (
                <ImageBoxWithDetailsPlaylist
                  img={mix.coverArt}
                  mixName={mix.name}
                  genre={mix.genre}
                  playlistId={mix.id}
                  playlistLanguage={mix.language}
                  key={index}
                />
              ))}
            </ImageBoxContainer>
          </TopHMixCountainer>

          <TopAMixCountainer>
            <Title>{t("top_arabic_mixes")}</Title>
            <ImageBoxContainer>
              {arabicMixData.map((mix, index) => (
                <ImageBoxWithDetailsPlaylist
                  img={mix.coverArt}
                  mixName={mix.name}
                  genre={mix.genre}
                  playlistId={mix.id}
                  playlistLanguage={mix.language}
                  key={index}
                />
              ))}
            </ImageBoxContainer>
          </TopAMixCountainer>
        </SongGallery>
      )}
    </>
  );
};

export default TopPlaylist;
