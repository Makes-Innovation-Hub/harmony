import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./GlobalPlayer.styled";
import { setCurrentSong, playSong } from "../../Redux/playlistSlice.js";
import Image from "../Image/Image.jsx";
import music from "../../assets/music.svg";

function GlobalPlayer() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const [minus, setMinus] = useState(false);
  const [animationEnd, setAnimationEnd] = useState(false);
  const [displayImg, setDisplayImg] = useState(true);
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
    if (minus) {
      setAnimationEnd(true);
      setMinus(false);
    }
  };
  return !animationEnd && currentPlaylistData?.currentSong ? (
    <>
      <S.MusicPlayerContainer
        animate={minus}
        onAnimationEnd={handleAnimationEnd}
      >
        <S.PlayBoxContainer>
          <S.MinusButton
            onClick={() => {
              setMinus(true);
              setDisplayImg(true);
            }}
          >
            -
          </S.MinusButton>
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
          <S.MinusButton onClick={() => setMinus(false)}>X</S.MinusButton>
        </S.PlayBoxContainer>

        {currentPlaylistData.currentSongIsPlaying && (
          <S.CyclicScroll>
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
          </S.CyclicScroll>
        )}
      </S.MusicPlayerContainer>
    </>
  ) : (
    <>
      {displayImg && currentPlaylistData?.currentSong ? (
        <>
          <S.PlayingSongContainer>
            <S.PlayingSongImg
              src={currentPlaylistData?.currentSong.profilePicUrl}
              alt=""
              onClick={() => {
                setDisplayImg(false);
                setAnimationEnd(false);
                setMinus(false);
              }}
            />
            <img
              src={music}
              alt="Icon"
              style={{
                position: "absolute",
                top: "0",
                left: "70px",
                width: "24px", // Adjust as needed
                height: "24px", // Adjust as needed
              }}
            />
          </S.PlayingSongContainer>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default GlobalPlayer;
