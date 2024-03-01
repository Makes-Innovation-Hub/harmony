import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MusicPlayerContainer, PlayBoxContainer } from "./MusicPlayer.styled";
import {
  setCurrentSong,
  playSong,
  setCurrentPlayingSong,
} from "../../Redux/playlistSlice.js";
import play from "../../assets/musicPlayer/play.png";
import pause from "../../assets/musicPlayer/pause.png";
import next from "../../assets/musicPlayer/next.png";
import previous from "../../assets/musicPlayer/previous.png";
import shuffle from "../../assets/musicPlayer/shuffle.png";
// import blueShuffle from "../../assets/musicPlayer/blue-shuffle.png";

function MusicPlayer() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const [isPlaying, setIsPlaying] = useState(
    currentPlaylistData.currentSongIsPlaying
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPlaylistData) {
      console.log(currentPlaylistData);
    }
  }, []);

  const playlist = currentPlaylistData.playlist;

  const handleTogglePlayPause = () => {
    if (currentPlaylistData.currentSongIsPlaying) {
      dispatch(playSong(false));
    } else {
      dispatch(playSong(true));
    }
    setIsPlaying(!isPlaying);
  };
  const handleNextVideo = () => {
    const nextIndex = currentPlaylistData.currentSongIndex + 1;
    if (nextIndex < playlist.length) {
      dispatch(
        setCurrentSong({
          currentSong: playlist[nextIndex],
          songIndex: nextIndex,
        })
      );
    } else {
      dispatch(
        setCurrentSong({
          currentSong: playlist[0],
          songIndex: 0,
        })
      );
    }
  };
  const handlePreviousVideo = () => {
    const previousIndex = currentPlaylistData.currentSongIndex - 1;
    if (previousIndex >= 0) {
      dispatch(
        setCurrentSong({
          currentSong: playlist[previousIndex],
          songIndex: previousIndex,
        })
      );
    } else {
      dispatch(
        setCurrentSong({
          currentSong: playlist[playlist.length - 1],
          songIndex: playlist.length - 1,
        })
      );
    }
  };
  return (
    <MusicPlayerContainer>
      {isPlaying && (
        <>
          <h1>Playing ...</h1>
        </>
      )}
      <PlayBoxContainer>
        <button onClick={handlePreviousVideo}>
          <img src={previous} alt="previous" />
        </button>

        <button onClick={handleTogglePlayPause}>
          {isPlaying ? (
            <img src={pause} alt="pause" />
          ) : (
            <img src={play} alt="play" />
          )}
        </button>

        <button onClick={handleNextVideo}>
          <img src={next} alt="next" />
        </button>
      </PlayBoxContainer>
      <div>
        <button>
          <img src={shuffle} alt="shuffle" />
        </button>
      </div>
    </MusicPlayerContainer>
  );
}

export default MusicPlayer;
