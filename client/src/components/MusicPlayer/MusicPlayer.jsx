import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import play from "../../assets/musicPlayer/play.png";
import pause from "../../assets/musicPlayer/pause.png";
import next from "../../assets/musicPlayer/next.png";
import previous from "../../assets/musicPlayer/previous.png";
import shuffle from "../../assets/musicPlayer/shuffle.png";
import { MusicPlayerContainer, PlayBoxContainer } from "./MusicPlayer.styled";
import { useDispatch, useSelector } from "react-redux";
// import blueShuffle from "../../assets/musicPlayer/blue-shuffle.png";

function MusicPlayer() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (currentPlaylistData) {
      console.log(currentPlaylistData);
    }
  }, []);

  const playerRef = useRef(null);
  const playlist = currentPlaylistData.playlist;
  const [currentVideo, setCurrentVideo] = useState(
    currentPlaylistData.currentSong.videoId
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: isPlaying ? 1 : 0,
    },
  };

  const handlePlayerReady = (event) => {
    // Pause the video when the player is ready
    event.target.pauseVideo();
  };

  const handleTogglePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.internalPlayer.pauseVideo(); // Pause the video
      } else {
        playerRef.current.internalPlayer.playVideo(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle the playing state
    }
  };
  const handleNextVideo = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < playlist.length) {
      setCurrentVideo(playlist[nextIndex].videoId);
      setCurrentIndex(nextIndex);
    } else {
      // If the current video is the last one in the playlist, loop back to the first video
      setCurrentVideo(playlist[0].videoId);
      setCurrentIndex(0);
    }
  };
  const handlePreviousVideo = () => {
    const previousIndex = currentIndex - 1;
    if (previousIndex >= 0) {
      setCurrentVideo(playlist[previousIndex].videoId);
      setCurrentIndex(previousIndex);
    } else {
      // If the current video is the first one in the playlist, loop to the last video
      setCurrentVideo(playlist[playlist.length - 1].videoId);
      setCurrentIndex(playlist.length - 1);
    }
  };
  return (
    <MusicPlayerContainer>
      <YouTube
        videoId={currentVideo}
        opts={opts}
        onReady={handlePlayerReady}
        ref={playerRef}
        onEnd={() => {
          const nextIndex = currentIndex + 1;

          if (nextIndex < playlist.length) {
            setCurrentVideo(playlist[nextIndex].videoId);
            setCurrentIndex(nextIndex);
          } else {
            setCurrentVideo(playlist[0].videoId);
            setCurrentIndex(0);
          }
        }}
      />
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
