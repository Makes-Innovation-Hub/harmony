import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  SongGallery,
  Cover,
  CoverCard,
  CoverImage,
  Title,
  ImageBoxContainer,
  TopHMixCountainer,
} from "./Coversstyles";
import { useGetTopCoversQuery } from "../../api/topCoversApi";
import SongCoverNew from "../SongCoverNew/SongCoverNew";

const HarmonyCovers = () => {
  const { t } = useTranslation();

  const { data: arabicTopCoversData, isSuccess: arabicTopCoversSuccess } =
    useGetTopCoversQuery("arabic");

  const { data: hebrewTopCoversData, isSuccess: hebrewTopCoversSuccess } =
    useGetTopCoversQuery("hebrew");
  if (hebrewTopCoversSuccess) {
    console.log(hebrewTopCoversData);
  }
  return (
    <SongGallery>
      <Cover>{t("Harmony Covers")}</Cover>

      <div>
        <div className="covers-container">
          <TopHMixCountainer>
            <Title>{t("Top Hebrew Covers in Arabic")}</Title>
            <ImageBoxContainer>
              {hebrewTopCoversSuccess && (
                <>
                  {hebrewTopCoversData.map((coverInfo) => {
                    return (
                      <div key={coverInfo._id}>
                        <SongCoverNew
                          artist={coverInfo?.coverArtistName}
                          backgroundImg={coverInfo?.backgroundUrl}
                          state={coverInfo}
                          likes={coverInfo?.likes.length}
                          views={coverInfo?.views}
                        />
                      </div>
                    );
                  })}
                </>
              )}
            </ImageBoxContainer>
          </TopHMixCountainer>

          <TopHMixCountainer>
            <Title>{t("Top Arabic Covers in Hebrew")}</Title>
            <ImageBoxContainer>
              {arabicTopCoversSuccess && (
                <>
                  {arabicTopCoversData.map((coverInfo) => {
                    return (
                      <div key={coverInfo._id}>
                        <SongCoverNew
                          artist={coverInfo?.coverArtistName}
                          backgroundImg={coverInfo?.backgroundUrl}
                          state={coverInfo}
                          likes={coverInfo?.likes.length}
                          views={coverInfo?.views}
                        />
                      </div>
                    );
                  })}
                </>
              )}
            </ImageBoxContainer>
          </TopHMixCountainer>
        </div>
      </div>
    </SongGallery>
  );
};

export default HarmonyCovers;
