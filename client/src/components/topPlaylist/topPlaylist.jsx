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
  const {
    data: playlistData,
    isSuccess,
    isLoading,
  } = useGetAllPlaylistDataQuery();

  const [hebrewMixData, setHebrewMixData] = useState();
  const [arabicMixData, setArabicMixData] = useState();

  useEffect(() => {
    if (isSuccess) {
      setHebrewMixData(playlistData.hebrewPlaylists);
      setArabicMixData(playlistData.arabicPlaylists);
    }
  }, [isSuccess]);

  const { t } = useTranslation();

  return (
    <>
      {hebrewMixData && arabicMixData && (
        <SongGallery>
          <Playlist>{t("Harmony Playlists")}</Playlist>
          <TopHMixCountainer>
            <Title>{t("Your Top Hebrew mixes")}</Title>
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
            <Title>{t("Your Top Arabic mixes")}</Title>
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
