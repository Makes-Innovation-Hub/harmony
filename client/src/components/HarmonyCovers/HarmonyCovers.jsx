import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios"; // Import Axios for making HTTP requests
import { SongGallery, Cover, CoverCard, CoverImage } from "./Coversstyles";

const HarmonyCovers = () => {
  const { t } = useTranslation();
  const [topHebrewCovers, setTopHebrewCovers] = useState([]);
  const [topArabicCovers, setTopArabicCovers] = useState([]);

  useEffect(() => {
    // Fetch top Hebrew covers from the backend
    axios
      .get("/api/topHebrewCovers")
      .then((response) => setTopHebrewCovers(response.data))
      .catch((error) =>
        console.error("Error fetching top Hebrew covers", error)
      );

    // Fetch top Arabic covers from the backend
    axios
      .get("/api/topArabicCovers")
      .then((response) => setTopArabicCovers(response.data))
      .catch((error) =>
        console.error("Error fetching top Arabic covers", error)
      );
  }, []);

  return (
    <SongGallery>
      <Cover>{t("Harmony Covers")}</Cover>

      <div>
        <h3>{t("Top Hebrew Covers in Arabic")}</h3>
        <div className="covers-container">
          {topHebrewCovers.map((cover) => (
            <Link to={cover.coverPageLink} key={cover.id}>
              <CoverCard>
                <CoverImage
                  src={`url_to_your_image_${cover.id}`}
                  alt={cover.title}
                />
                <p>{cover.title}</p>
                <p>
                  {t("Likes")}: {cover.likes}
                </p>
              </CoverCard>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h3>{t("Top Arabic Covers in Hebrew")}</h3>
        <div className="covers-container">
          {topArabicCovers.map((cover) => (
            <Link to={cover.coverPageLink} key={cover.id}>
              <CoverCard>
                <CoverImage
                  src={`url_to_your_image_${cover.id}`}
                  alt={cover.title}
                />
                <p>{cover.title}</p>
                <p>
                  {t("Likes")}: {cover.likes}
                </p>
              </CoverCard>
            </Link>
          ))}
        </div>
      </div>
    </SongGallery>
  );
};

export default HarmonyCovers;
