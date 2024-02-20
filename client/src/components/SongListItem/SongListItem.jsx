import TranslationSymbolsGroup from "../TraslationSymbolsGroup/TranslationSymbolsGroup";
import ThreeLangNames from "../ThreeLnagNames/ThreeLangNames";
import ClipArtImage from "../ClipArtImage/ClipArtImage";
import ContentWrapper from "./SongListItem.styled";
import { useNavigate } from "react-router-dom";
import { useSongDataMutation } from "../../api/songDataApiSlice";
import { useEffect } from "react";

function SongListItem({ artist, arabicName, hebrewName, englishName, imgURL }) {
  const navigate = useNavigate();
  const [songDataMutation, { data: songData }] = useSongDataMutation();

  useEffect(() => {
    songDataMutation({ song: englishName, artist });
  }, []);

  return (
    <ContentWrapper
      onClick={() => {
        navigate("/translating", {
          state: {
            artist,
            song: hebrewName,
            coverArt: imgURL,
          },
        });
      }}
    >
      <ClipArtImage
        borderRadius="30px"
        imgURL={songData?.coverArt}
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

      <TranslationSymbolsGroup originalLanguage={songData?.originalLang} />
    </ContentWrapper>
  );
}

export default SongListItem;
