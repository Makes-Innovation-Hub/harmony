import { useSelector } from "react-redux";
import ImgCard from "../General/ImgCard";
import ThreeLangNames from "../ThreeLnagNames/ThreeLangNames";
import { ContentWrapper, ContentWrapper2 } from "./SongInPlaylist.styled";
import ThreeLangSongName from "../ThreeLangSongName/ThreeLangSongName";

function SongInPlaylist({
  arabicName,
  hebrewName,
  englishName,
  imgURL,
  isPlaying,
}) {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  // TODO: Check if the song index matches the current song index and define the isPlaying value accordingly
  return (
    <ContentWrapper>
      <ContentWrapper2>
        <ImgCard src={imgURL} />
      </ContentWrapper2>
      <ContentWrapper2>
        <ThreeLangSongName
          arabicName={arabicName}
          hebrewName={hebrewName}
          englishName={englishName}
          fontSize="13px"
          lineHeight="17.29px"
          isPlaying={isPlaying}
        />
      </ContentWrapper2>
    </ContentWrapper>
  );
}

export default SongInPlaylist;
