import imgSrc from "../../assets/songDetails/Rectangle 3.png";
import { ArtistsDetailsContainer,
    PhotoDetailsContainer, 
    TextDetailsContainer,
    SongName, 
    ArtistName,
    ResultsImage, 
   } from "./artistsResults.styled";
// import "./songDetails.css";

const Artists = () => {
  return (
    <ArtistsDetailsContainer>
      <PhotoDetailsContainer>
        <ResultsImage src={imgSrc} />
      </PhotoDetailsContainer>
      <TextDetailsContainer>
        <div>
          <ArtistName>English Name</ArtistName>
        </div>
        <div>
          <ArtistName>שם עברי</ArtistName>
        </div>
        <div>
          <ArtistName>اسم عربي</ArtistName>
        </div>
      </TextDetailsContainer>
    </ArtistsDetailsContainer>
  );
};

export default Artists;