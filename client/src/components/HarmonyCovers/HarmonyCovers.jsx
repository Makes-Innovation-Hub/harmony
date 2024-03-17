import React from "react";
import { useTranslation } from "react-i18next";
import * as S from "./Coversstyles";
import { useGetTopCoversQuery } from "../../api/topCoversApi";
import SongCoverNew from "../SongCoverNew/SongCoverNew";

const HarmonyCovers = ({ handleData }) => {
  const { t } = useTranslation();

  const { data: arabicTopCoversData, isSuccess: arabicTopCoversSuccess } =
    useGetTopCoversQuery("arabic");

  const { data: hebrewTopCoversData, isSuccess: hebrewTopCoversSuccess } =
    useGetTopCoversQuery("hebrew");

  const isLoading = !arabicTopCoversSuccess || !hebrewTopCoversSuccess;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <S.SongGallery>
      <S.Cover>{t("Harmony Covers")}</S.Cover>

      <S.TopHCoversCountainer>
        <S.Title>{t("Top Hebrew Covers in Arabic")}</S.Title>
        <S.ImageBoxContainer>
          {hebrewTopCoversData.map((coverInfo) => (
            <div key={coverInfo._id}>
              <SongCoverNew
                artist={coverInfo?.coverArtistName}
                backgroundImg={coverInfo?.backgroundUrl}
                state={coverInfo}
                likes={coverInfo?.likes.length}
                views={coverInfo?.views}
              />
            </div>
          ))}
        </S.ImageBoxContainer>
      </S.TopHCoversCountainer>

      <S.TopACoversCountainer>
        <S.Title>{t("Top Arabic Covers in Hebrew")}</S.Title>
        <S.ImageBoxContainer>
          {arabicTopCoversData.map((coverInfo) => (
            <div key={coverInfo._id}>
              <SongCoverNew
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
