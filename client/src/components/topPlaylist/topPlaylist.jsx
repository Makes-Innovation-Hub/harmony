import {
  SongGallery,
  TopHMixCountainer,
  TopAMixCountainer,
  Title,
  ImageBoxContainer,
  Playlist,
} from "./topPlaylistStyle";
import { useGetAllPlaylistDataQuery } from "../../api/playlistApiSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ImageBoxWithDetailsHebrew from "./ImageBoxWithDetailsHebrew";
import ImageBoxWithDetailsArabic from "./ImageBoxWithDetailsArabic";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";

const TopPlaylist = () => {
  const { data: playlistData, isSuccess } = useGetAllPlaylistDataQuery();

  const [hebrewMixData, setHebrewMixData] = useState();
  const [arabicMixData, setArabicMixData] = useState();

  useEffect(() => {
    if (isSuccess) {
      setHebrewMixData(playlistData.hebrewPlaylist);
      setArabicMixData(playlistData.arabicPlaylist);
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
    <SongGallery>
      <Playlist>{t("Harmony Playlist")}</Playlist>

      <TopHMixCountainer>
        <Title>{t("Your Top Hebrew Mixes")}</Title>
        <ImageBoxContainer>
          {hebrewMixData?.hebrewRockMix?.map((mix, index) => (
            <Link
              to="/playlist"
              key={index}
              onClick={() => handleMixClick("hebrew", mix.name)}
            >
              <ImageBoxWithDetailsHebrew
                img={mix.coverArt}
                mixName={mix.name}
                genre="Rock"
              />
            </Link>
          ))}

          {hebrewMixData?.hebrewPopMix?.map((mix, index) => (
            <Link
              to="/playlist"
              key={index}
              onClick={() => handleMixClick("hebrew", mix.name)}
            >
              <ImageBoxWithDetailsHebrew
                img={mix.coverArt}
                mixName={mix.name}
                genre="Pop"
              />
            </Link>
          ))}

          {hebrewMixData?.hebrewOrientalMix?.map((mix, index) => (
            <Link
              to="/playlist"
              key={index}
              onClick={() => handleMixClick("hebrew", mix.name)}
            >
              <ImageBoxWithDetailsHebrew
                img={mix.coverArt}
                mixName={mix.name}
                genre="Oriental"
              />
            </Link>
          ))}
        </ImageBoxContainer>
      </TopHMixCountainer>

      <TopAMixCountainer>
        <Title>{t("Your Top Arabic Mixes")}</Title>
        <ImageBoxContainer>
          {arabicMixData?.arabicRockMix?.map((mix, index) => (
            <Link
              to="/playlist"
              key={index}
              onClick={() => handleMixClick("arabic", mix.name)}
            >
              <ImageBoxWithDetailsArabic
                img={mix.coverArt}
                mixName={mix.name}
                genre="Rock"
              />
            </Link>
          ))}

          {arabicMixData?.arabicPopMix?.map((mix, index) => (
            <Link
              to="/playlist"
              key={index}
              onClick={() => handleMixClick("arabic", mix.name)}
            >
              <ImageBoxWithDetailsArabic
                img={mix.coverArt}
                mixName={mix.name}
                genre="Pop"
              />
            </Link>
          ))}

          {arabicMixData?.arabicOrientalMix?.map((mix, index) => (
            <Link
              to="/playlist"
              key={index}
              onClick={() => handleMixClick("arabic", mix.name)}
            >
              <ImageBoxWithDetailsArabic
                img={mix.coverArt}
                mixName={mix.name}
                genre="Oriental"
              />
            </Link>
          ))}
        </ImageBoxContainer>
      </TopAMixCountainer>
    </SongGallery>
  );
};

export default TopPlaylist;
