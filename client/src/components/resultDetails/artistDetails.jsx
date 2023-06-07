import React, { useState, useEffect } from "react";
import imgSrc from "../../assets/songDetails/Rectangle 3.png";
import {
  ArtistsDetailsContainer,
  PhotoDetailsContainer,
  TextDetailsContainer,
  ArtistName,
  ResultsImage,
} from "./artistsResults.styled";

const Artists = () => {
  const [artistNames, setArtistNames] = useState({
    english: "",
    hebrew: "",
    arabic: "",
  });

  useEffect(() => {
    fetchArtistNames();
  }, []);

  const fetchArtistNames = async () => {
    try {
      const response = await fetch("endpoint");
      const data = await response.json();

      setArtistNames({
        english: data.englishName,
        hebrew: data.hebrewName,
        arabic: data.arabicName,
      });
    } catch (error) {
      console.error("Error fetching artist names:", error);
    }
  };

  return (
    <ArtistsDetailsContainer>
      <PhotoDetailsContainer>
        <ResultsImage src={imgSrc} />
      </PhotoDetailsContainer>
      <TextDetailsContainer>
        <div>
          <ArtistName>{artistNames.english}</ArtistName>
        </div>
        <div>
          <ArtistName>{artistNames.hebrew}</ArtistName>
        </div>
        <div>
          <ArtistName>{artistNames.arabic}</ArtistName>
        </div>
      </TextDetailsContainer>
    </ArtistsDetailsContainer>
  );
};

export default Artists;
