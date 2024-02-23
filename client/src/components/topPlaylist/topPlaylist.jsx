import {
  SongGallery,
  TopHMixCountainer,
  TopAMixCountainer,
  Title,
  ImageBoxContainer,
} from "./PlaylistStyle";
import { useGetAllPlaylistDataQuery } from "../../api/playlistApiSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";
import ImageBoxWithDetailsPlaylist from "./ImageBoxWithDetailsPlaylist";

const TopPlaylist = () => {
  const { data: playlistData, isSuccess } = useGetAllPlaylistDataQuery();

  const [hebrewMixData, setHebrewMixData] = useState();
  const [arabicMixData, setArabicMixData] = useState();

  useEffect(() => {
    if (isSuccess) {
      setHebrewMixData(playlistData.hebrewPlaylists);
      setArabicMixData(playlistData.arabicPlaylists);
      console.log(playlistData);
    }
  }, [isSuccess]);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleMixClick = (language, mixName) => {
    dispatch({
      type: "SET_SELECTED_MIX",
      payload: { language, mixName },
    });
  };

  return (
    <>
      {hebrewMixData && arabicMixData && (
        <SongGallery>
          <h2>Harmony Playlists</h2>

          <TopHMixCountainer>
            <Title>{t("Your Top Hebrew Mixes")}</Title>
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
            <Title>{t("Your Top Arabic Mixes")}</Title>
            <ImageBoxContainer>
              {arabicMixData.map((mix, index) => (
                <ImageBoxWithDetailsPlaylist
                  img={mix.coverArt}
                  mixName={mix.name}
                  genre={mix.genre}
                  playlistId={mix.id}
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
