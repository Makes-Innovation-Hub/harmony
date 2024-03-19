import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./MusicPlayer.styled";
import {
  setCurrentSong,
  playSong,
  shufflePlaylist,
} from "../../Redux/playlistSlice.js";
import play from "../../assets/musicPlayer/play.svg";
import pause from "../../assets/musicPlayer/pause.svg";
import next from "../../assets/musicPlayer/next.svg";
import previous from "../../assets/musicPlayer/previous.svg";
import shuffle from "../../assets/musicPlayer/shuffle.svg";
import blueShuffle from "../../assets/musicPlayer/blue-shuffle.svg";
import { useNavigate } from "react-router-dom";

function MusicPlayer() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isShuffling, setIsShuffling] = useState(false);

  const [isPlaying, setIsPlaying] = useState(
    currentPlaylistData.currentSongIsPlaying
  );

  useEffect(() => {
    if (isShuffling) {
      setIsShuffling(false);
      const songId = currentPlaylistData.playlist[0].videoId;
      navigate(
        `/playlistSongPage?songId=${songId}&playlistId=${currentPlaylistData.playlistId}&name=${currentPlaylistData.playlistName}&language=${currentPlaylistData.playlistLanguage}`
      );
    }
  }, [isShuffling]);

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
    let songId;
    if (nextIndex < playlist.length) {
      dispatch(
        setCurrentSong({
          currentSong: playlist[nextIndex],
          songIndex: nextIndex,
          direction: "left",
        })
      );
      songId = playlist[nextIndex].videoId;
    } else {
      dispatch(
        setCurrentSong({
          currentSong: playlist[0],
          songIndex: 0,
          direction: "left",
        })
      );
      songId = playlist[0].videoId;
    }
    navigate(
      `/playlistSongPage?songId=${songId}&playlistId=${currentPlaylistData.playlistId}&name=${currentPlaylistData.playlistName}&language=${currentPlaylistData.playlistLanguage}`
    );
  };
  const handlePreviousVideo = () => {
    const previousIndex = currentPlaylistData.currentSongIndex - 1;
    let songId;
    if (previousIndex >= 0) {
      dispatch(
        setCurrentSong({
          currentSong: playlist[previousIndex],
          songIndex: previousIndex,
          direction: "right",
        })
      );
      songId = playlist[previousIndex].videoId;
    } else {
      dispatch(
        setCurrentSong({
          currentSong: playlist[playlist.length - 1],
          songIndex: playlist.length - 1,
          direction: "right",
        })
      );
      songId = playlist[playlist.length - 1].videoId;
    }
    navigate(
      `/playlistSongPage?songId=${songId}&playlistId=${currentPlaylistData.playlistId}&name=${currentPlaylistData.playlistName}&language=${currentPlaylistData.playlistLanguage}`
    );
  };

  const handleShuffle = () => {
    if (!isPlaying) {
      dispatch(shufflePlaylist());
      setIsShuffling(true);
    }
  };

  return (
    <S.MusicPlayerContainer>
      <S.PlayBoxContainer>
        <S.ButtonImage
          src={previous}
          style={{ background: "#f4e6d1", padding: "6px" }}
          alt="previous"
          onClick={handlePreviousVideo}
        />

        <S.ButtonImage
          src={isPlaying ? pause : play}
          alt={isPlaying ? "pause" : "play"}
          onClick={handleTogglePlayPause}
        />

        <S.ButtonImage src={next} alt="next" onClick={handleNextVideo} />
      </S.PlayBoxContainer>

      {isPlaying ? (
        <img src={blueShuffle} alt="blueShuffle" />
      ) : (
        <S.ButtonImage src={shuffle} alt="shuffle" onClick={handleShuffle} />
      )}
    </S.MusicPlayerContainer>
  );
}

export default MusicPlayer;
