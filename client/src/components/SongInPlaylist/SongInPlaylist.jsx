import ImgCard from "../General/ImgCard";
import ThreeLangNames from "../ThreeLnagNames/ThreeLangNames";
import ContentWrapper from "./SongInPlaylist.styled";

function SongInPlaylist({ arabicName, hebrewName, englishName, imgURL }) {
  return (
    <ContentWrapper>
      <ContentWrapper>
        <ImgCard src={imgURL} />
      </ContentWrapper>
      <ContentWrapper>
        <ThreeLangNames
          arabicName={arabicName}
          hebrewName={hebrewName}
          englishName={englishName}
          fontSize="13px"
          lineHeight="17px"
        />
      </ContentWrapper>
    </ContentWrapper>
  );
}

export default SongInPlaylist;
