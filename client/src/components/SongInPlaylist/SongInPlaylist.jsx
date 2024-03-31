import { useDispatch, useSelector } from "react-redux";
import ImgCard from "../General/ImgCard";
import { ContentWrapper, ContentWrapper2 } from "./SongInPlaylist.styled";
import ThreeLangSongName from "../ThreeLangSongName/ThreeLangSongName";
import { setCurrentSong } from "../../Redux/playlistSlice.js";
import { useNavigate } from "react-router-dom";
import Image from "../Image/Image.jsx";
function SongInPlaylist({
  songIndex,
  songId,
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
        direction: "left",
      })
    );
    navigate(
      `/playlistSongPage?songId=${songId}&playlistId=${currentPlaylistData.playlistId}&name=${currentPlaylistData.playlistName}&language=${currentPlaylistData.playlistLanguage}`
    );
  };
  return (
    <ContentWrapper onClick={handleSelectSong}>
      <ContentWrapper2>
        <Image name={imgURL} alt={"profile picture"} styles={ImgCard} />
      </ContentWrapper2>
      <ContentWrapper2>
        <ThreeLangSongName
          arabicName={arabicName}
          hebrewName={hebrewName}
          englishName={englishName}
          fontSize="13px"
          lineHeight="17.29px"
          isPlaying={
            currentPlaylistData.currentSongIndex === songIndex &&
            currentPlaylistData.currentSongIsPlaying
          }
        />
      </ContentWrapper2>
    </ContentWrapper>
  );
}

export default SongInPlaylist;
