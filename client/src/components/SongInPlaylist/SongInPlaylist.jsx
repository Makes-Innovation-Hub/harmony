import { useDispatch, useSelector } from "react-redux";
import ImgCard from "../General/ImgCard";
import { ContentWrapper, ContentWrapper2 } from "./SongInPlaylist.styled";
import ThreeLangSongName from "../ThreeLangSongName/ThreeLangSongName";
import { setCurrentSong } from "../../Redux/playlistSlice.js";
import { useNavigate } from "react-router-dom";
function SongInPlaylist({
  songIndex,
  arabicName,
  hebrewName,
  englishName,
  imgURL,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  // TODO: Check if the song index matches the current song index and define the isPlaying value accordingly
  const handleSelectSong = () => {
    dispatch(
      setCurrentSong({
        currentSong: currentPlaylistData.playlist[songIndex],
        songIndex: songIndex,
      })
    );
    console.log(currentPlaylistData);
    navigate("/playlistSongPage");
  };
  return (
    <ContentWrapper>
      <ContentWrapper2>
        <ImgCard src={imgURL} onClick={handleSelectSong} />
      </ContentWrapper2>
      <ContentWrapper2>
        <ThreeLangSongName
          arabicName={arabicName}
          hebrewName={hebrewName}
          englishName={englishName}
          fontSize="13px"
          lineHeight="17.29px"
          isPlaying={currentPlaylistData.currentSongIndex === songIndex}
        />
      </ContentWrapper2>
    </ContentWrapper>
  );
}

export default SongInPlaylist;
