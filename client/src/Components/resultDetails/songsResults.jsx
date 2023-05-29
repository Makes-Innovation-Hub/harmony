import imgSrc from "../../assets/songDetails/Rectangle 3.png";
import arrowImg from "../../assets/songDetails/Arrow 1.png";
import hebrewImg from "../../assets/songDetails/ע.png";
import arabicImg from "../../assets/songDetails/ع.png";
import { SongsDetailsContainer,
         PhotoDetailsContainer, 
         TextDetailsContainer,
         TranslationDiv,
         SongName, 
         ResultsImage,
         Button } from "./songsResults.styled";


const Songs = () => {
  return (
    <SongsDetailsContainer>
      <PhotoDetailsContainer>
        <ResultsImage src={imgSrc} />
      </PhotoDetailsContainer>
      <TextDetailsContainer>
        <div>
          <SongName>English </SongName>
        </div>
        <div>
          <SongName>עברית </SongName>
        </div>
        <div>
          <SongName>العربية </SongName>
        </div>
      </TextDetailsContainer>
        <TranslationDiv>
          <Button className="btn">
            <img src={arabicImg} alt="Arabic" />
          </Button>
          <img src={arrowImg} alt="Arrow"/>
          <Button className="btn">
            <img src={hebrewImg} alt="Hebrew" />
          </Button>
        </TranslationDiv>
    </SongsDetailsContainer>
  );
};

export default Songs;