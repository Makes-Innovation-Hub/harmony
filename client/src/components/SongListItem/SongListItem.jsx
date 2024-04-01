import TranslationSymbolsGroup from "../TraslationSymbolsGroup/TranslationSymbolsGroup";
import ThreeLangNames from "../ThreeLnagNames/ThreeLangNames";
import ClipArtImage from "../ClipArtImage/ClipArtImage";
import ContentWrapper from "./SongListItem.styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { serverApiUrl } from "../../constants/urls";

function SongListItem({ arabicName, hebrewName, englishName, songId }) {
  const navigate = useNavigate();
  const [songData, setSongData] = useState(null);

  const getSongById = async () => {
    const response = await axios.get(`${serverApiUrl}/songs/find/${songId}`);
    const result = response.data;
    setSongData(result);
  };

  useEffect(() => {
    getSongById();
  }, []);

  return (
    <ContentWrapper
      onClick={() => {
        navigate(`/song/${songId}`);
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
        gap={"0px"}
      />

      <TranslationSymbolsGroup originalLanguage={songData?.originalLang} />
    </ContentWrapper>
  );
}

export default SongListItem;
