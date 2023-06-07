import { useEffect, useState } from "react";
import imgSrc from "../../assets/songDetails/Rectangle 3.png";
import arrowImg from "../../assets/songDetails/Arrow 1.png";
import hebrewImg from "../../assets/songDetails/ע.png";
import arabicImg from "../../assets/songDetails/ع.png";
import {
  SongsDetailsContainer,
  PhotoDetailsContainer,
  TextDetailsContainer,
  TranslationDiv,
  SongName,
  ResultsImage,
  Button,
} from "./songsResults.styled";

const Songs = () => {
  const [songNames, setSongNames] = useState({
    english: "",
    arabic: "",
    hebrew: "",
  });

  useEffect(() => {
    fetchSongsName();
  }, []);

  const fetchSongsName = async () => {
    try {
      const res = await fetch("endpoint");
      const data = await res.json();

      setSongNames({
        english: data.englishSongName,
        arabic: data.arabicSongName,
        hebrew: data.hebrewSongName,
      });
    } catch (error) {}
  };

  return (
    <SongsDetailsContainer>
      <PhotoDetailsContainer>
        <ResultsImage src={imgSrc} />
      </PhotoDetailsContainer>
      <TextDetailsContainer>
        <div>
          <SongName>{songNames.english}</SongName>
        </div>
        <div>
          <SongName>{songNames.hebrew}</SongName>
        </div>
        <div>
          <SongName>{songNames.arabic}</SongName>
        </div>
      </TextDetailsContainer>
      <TranslationDiv>
        <Button className="btn">
          <img src={arabicImg} alt="Arabic" />
        </Button>
        <img src={arrowImg} alt="Arrow" />
        <Button className="btn">
          <img src={hebrewImg} alt="Hebrew" />
        </Button>
      </TranslationDiv>
    </SongsDetailsContainer>
  );
};

export default Songs;
