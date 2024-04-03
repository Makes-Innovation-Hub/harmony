import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./GlobalPlayer.styled";
import { setCurrentSong, playSong } from "../../Redux/playlistSlice.js";
import Image from "../Image/Image.jsx";
import music from "../../assets/music.svg";

function GlobalPlayer() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const [minusPressed, setMinusPressed] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);
  const [displayImg, setDisplayImg] = useState(true);
  const [displayGlobalPlayer, setDisplayGlobalPlayer] = useState(true);
  const dispatch = useDispatch();

  const playlist = currentPlaylistData.playlist;

  const handleTogglePlayPause = () => {
    if (currentPlaylistData.currentSongIsPlaying) {
      dispatch(playSong(false));
    } else {
      dispatch(playSong(true));
    }
  };

  const handleNextVideo = () => {
    const nextIndex = currentPlaylistData.currentSongIndex + 1;
    if (nextIndex < playlist.length) {
      dispatch(
        setCurrentSong({
          currentSong: playlist[nextIndex],
          songIndex: nextIndex,
          direction: "left",
        })
      );
    } else {
      dispatch(
        setCurrentSong({
          currentSong: playlist[0],
          songIndex: 0,
          direction: "left",
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
          direction: "right",
        })
      );
    } else {
      dispatch(
        setCurrentSong({
          currentSong: playlist[playlist.length - 1],
          songIndex: playlist.length - 1,
          direction: "right",
        })
      );
    }
  };
  const handleAnimationEnd = () => {
    if (minusPressed) {
      setAnimationEnd(true);
    }
  };
  const handleClose = () => {
    setDisplayGlobalPlayer(false);
    dispatch(
      setCurrentSong({
        currentSong: null,
        songIndex: 0,
        direction: "left",
      })
    );
    dispatch(playSong(false));
  };

  return displayGlobalPlayer &&
    !animationEnd &&
    currentPlaylistData?.currentSong ? (
    <>
      <S.MusicPlayerContainer
        animate={minusPressed.toString()}
        onAnimationEnd={handleAnimationEnd}
      >
        <S.PlayBoxContainer>
          <S.MinusXButton
            onClick={() => {
              setMinusPressed(true);
              setDisplayImg(true);
            }}
          >
            -
          </S.MinusXButton>
          <Image
            name={"previous"}
            alt={"previous"}
            styles={S.PreviousButtonImage}
            onClick={handlePreviousVideo}
          />
          <Image
            name={currentPlaylistData.currentSongIsPlaying ? "pause" : "play"}
            alt={currentPlaylistData.currentSongIsPlaying ? "pause" : "play"}
            styles={S.ButtonImage}
            onClick={handleTogglePlayPause}
          />
          <Image
            name={"next"}
            alt={"next"}
            styles={S.ButtonImage}
            onClick={handleNextVideo}
          />
          <S.XButton onClick={handleClose}>X</S.XButton>
        </S.PlayBoxContainer>

        <S.CyclicScroll>
          {currentPlaylistData.currentSongIsPlaying && (
            <>
              <img
                src={music}
                alt="Icon"
                style={{ width: "24px", height: "24px" }}
              />
              {`${
                currentPlaylistData?.playlist[
                  currentPlaylistData.currentSongIndex
                ].songName3Lang.english
              } - ${
                currentPlaylistData?.playlist[
                  currentPlaylistData.currentSongIndex
                ].songName3Lang.arabic
              } - ${
                currentPlaylistData?.playlist[
                  currentPlaylistData.currentSongIndex
                ].songName3Lang.hebrew
              } `}
            </>
          )}
        </S.CyclicScroll>
      </S.MusicPlayerContainer>
    </>
  ) : (
    <>
      {displayGlobalPlayer && displayImg && currentPlaylistData?.currentSong ? (
        <>
          <S.PlayingSongContainer>
            <S.PlayingSongImg
              src={currentPlaylistData?.currentSong.profilePicUrl}
              alt="song"
              onClick={() => {
                setDisplayImg(false);
                setAnimationEnd(false);
                setMinusPressed(false);
              }}
            />
            <S.MusicIicon src={music} alt="Icon" />
          </S.PlayingSongContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default GlobalPlayer;
