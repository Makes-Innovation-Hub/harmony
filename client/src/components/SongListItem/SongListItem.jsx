import TranslationSymbolsGroup from "../TraslationSymbolsGroup/TranslationSymbolsGroup";
import ThreeLangNames from "../ThreeLnagNames/ThreeLangNames";
import ClipArtImage from "../ClipArtImage/ClipArtImage";
import ContentWrapper from "./SongListItem.styled";

function SongListItem({ arabicName, hebrewName, englishName, imgURL }) {
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
      />
      <TranslationSymbolsGroup />
    </ContentWrapper>
  );
}

export default SongListItem;
