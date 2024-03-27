import React from "react";
import { useTranslation } from "react-i18next";
import { useGetTopCoversQuery } from "../../api/topCoversApi";
import HomeCovers from "../HomeCovers/HomeCovers";
import * as S from "../topPlaylist/PlaylistStyle";

const HarmonyCovers = () => {
  const { t } = useTranslation();

  const { data: arabicTopCoversData } = useGetTopCoversQuery("arabic");

  const { data: hebrewTopCoversData } = useGetTopCoversQuery("hebrew");

  return (
    <S.SongGallery>
      <S.Playlist>{t("Harmony Covers")}</S.Playlist>
      <S.TopHMixCountainer>
        <S.Title>{t("Top Hebrew Covers in Arabic")}</S.Title>
        <S.ImageBoxContainer>
          {hebrewTopCoversData?.map((coverInfo) => (
            <HomeCovers
              key={coverInfo?._id}
              id={coverInfo?._id}
              artist={coverInfo?.coverArtistName}
              backgroundImg={coverInfo?.backgroundUrl}
              state={coverInfo}
              likes={coverInfo?.likes.length}
              views={coverInfo?.views}
            />
          ))}
        </S.ImageBoxContainer>
      </S.TopHMixCountainer>

      <S.TopAMixCountainer>
        <S.Title>{t("Top Arabic Covers in Hebrew")}</S.Title>
        <S.ImageBoxContainer>
          {arabicTopCoversData?.map((coverInfo) => (
            <div key={coverInfo?._id}>
              <HomeCovers
                id={coverInfo?._id}
                artist={coverInfo?.coverArtistName}
                backgroundImg={coverInfo?.backgroundUrl}
                state={coverInfo}
                likes={coverInfo?.likes.length}
                views={coverInfo?.views}
              />
            </div>
          ))}
        </S.ImageBoxContainer>
      </S.TopAMixCountainer>
    </S.SongGallery>
  );
};

export default HarmonyCovers;
