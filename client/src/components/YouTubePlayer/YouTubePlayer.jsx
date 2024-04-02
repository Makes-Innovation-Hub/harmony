import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import { setCurrentSong } from "../../Redux/playlistSlice.js";
function YouTubePlayer() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const dispatch = useDispatch();
  const playerRef = useRef(null);
  const playlist = currentPlaylistData.playlist;
  const [currentVideo, setCurrentVideo] = useState(null);
  useEffect(() => {
    if (currentPlaylistData) {
      setCurrentVideo(currentPlaylistData.currentSong?.videoId);
    }
  }, [currentPlaylistData]);
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      autoplay: currentPlaylistData.currentSongIsPlaying ? 1 : 0,
    },
  };

  useEffect(() => {
    if (playerRef.current) {
      if (!currentPlaylistData.currentSongIsPlaying) {
        playerRef.current.internalPlayer.pauseVideo(); // Pause the video
      } else {
        playerRef.current.internalPlayer.playVideo(); // Play the video
      }
    }
  }, [currentPlaylistData.currentSongIsPlaying]);

  const handlePlayerReady = (event) => {
    // Pause the video when the player is ready
    event.target.pauseVideo();
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
      // If the current video is the last one in the playlist, loop back to the first video
      dispatch(
        setCurrentSong({
          currentSong: playlist[0],
          songIndex: 0,
          direction: "left",
        })
      );
    }
  };
  return (
    <div style={{ height: 0, width: 0 }}>
      <YouTube
        videoId={currentVideo}
        opts={opts}
        onReady={handlePlayerReady}
        ref={playerRef}
        onEnd={handleNextVideo}
        style={{ width: 0, height: 0 }}
      />
    </div>
  );
}

export default YouTubePlayer;
