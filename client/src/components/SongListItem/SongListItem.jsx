import ContentWrapper from "../ContentWrapper/ContentWrapper";
import TranslationSymbolsGroup from "../TraslationSymbolsGroup/TranslationSymbolsGroup";
import ThreeLangNames from "../ThreeLnagNames/ThreeLangNames"
import ClipArtImage from "../ClipArtImage/ClipArtImage";

function SongListItem({arabicName, hebrewName, englishName, imgURL}){
    return (
        <ContentWrapper flexDirection='row'>
            <TranslationSymbolsGroup/>
            <ThreeLangNames arabicName={arabicName} hebrewName={hebrewName} englishName={englishName} fontSize='13px' lineHeight='17px'/>
            <ClipArtImage borderRadius='45px' imgURL={imgURL} width='3.35rem' height='3.2rem'/>
        </ContentWrapper>
    )
}

export default SongListItem