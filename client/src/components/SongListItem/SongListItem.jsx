import TranslationSymbolsGroup from "../TraslationSymbolsGroup/TranslationSymbolsGroup";
import ThreeLangNames from "../ThreeLnagNames/ThreeLangNames";
import ClipArtImage from "../ClipArtImage/ClipArtImage";
import ContentWrapper from "./SongListItem.styled";
import { useLocation } from "react-router-dom";

function SongListItem({ arabicName, hebrewName, englishName, imgURL }) {
  const location = useLocation();
  const artistData = location.state.artistData;
  return (
    <ContentWrapper>
      <ClipArtImage
        borderRadius="30px"
        imgURL={imgURL}
        width="3.35rem"
        height="3.2rem"
      />
      <ThreeLangNames
        arabicName={arabicName}
        hebrewName={hebrewName}
        englishName={englishName}
        fontSize="13px"
        lineHeight="17px"
        artistName={artistData.name.english}
      />
      <TranslationSymbolsGroup />
    </ContentWrapper>
  );
}

export default SongListItem;
