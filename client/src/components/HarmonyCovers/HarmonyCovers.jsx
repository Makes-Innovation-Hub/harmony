import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./Coversstyles";
import { useGetTopCoversQuery } from "../../api/topCoversApi";
import HomeCovers from "../HomeCovers/HomeCovers";

const HarmonyCovers = () => {
  const { t } = useTranslation();

  const { data: arabicTopCoversData } = useGetTopCoversQuery("arabic");

  const { data: hebrewTopCoversData } = useGetTopCoversQuery("hebrew");

  return (
    <S.SongGallery>
      <S.Cover>{t("Harmony Covers")}</S.Cover>
      <S.TopHCoversCountainer>
        <S.Title>{t("Top Hebrew Covers in Arabic")}</S.Title>
        <S.ImageBoxContainer>
          {hebrewTopCoversData?.map((coverInfo) => (
            // <div key={coverInfo._id}>
            <HomeCovers
              key={coverInfo?._id}
              id={coverInfo?._id}
              artist={coverInfo?.coverArtistName}
              backgroundImg={coverInfo?.backgroundUrl}
              state={coverInfo}
              likes={coverInfo?.likes.length}
              views={coverInfo?.views}
            />
            //  </div>
          ))}
        </S.ImageBoxContainer>
      </S.TopHCoversCountainer>

      <S.TopACoversCountainer>
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
      </S.TopACoversCountainer>
    </S.SongGallery>
  );
};

export default HarmonyCovers;
