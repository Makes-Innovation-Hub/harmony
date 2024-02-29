import React, { useState } from "react";
import YouTube from "react-youtube";
import play from "../../assets/musicPlayer/play.png";
// import pause from "../../assets/musicPlayer/pause.png";
import next from "../../assets/musicPlayer/next.png";
import previous from "../../assets/musicPlayer/previous.png";
import shuffle from "../../assets/musicPlayer/shuffle.png";
import { MusicPlayerContainer, PlayBoxContainer } from "./MusicPlayer.styled";
// import blueShuffle from "../../assets/musicPlayer/blue-shuffle.png";

function MusicPlayer() {
  const playlist = ["dUQCrQYzZzY", "dUQCrQYzZzY", "dUQCrQYzZzY"]; // Replace with your video IDs
  const [playing, setPlaying] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(playlist[0]);

  const opts = {
    height: "0", // Setting the height to 0 hides the video
    width: "0", // Setting the width to 0 hides the video
    playerVars: {
      autoplay: 1,
      controls: 0, // Hides video controls
      loop: 1,
      start: 0, // Start at the beginning
      modestbranding: 1,
      iv_load_policy: 3, // Hide video annotations
      showinfo: 0, // Hide video title and uploader
      disablekb: 1, // Disable keyboard controls
      fs: 0, // Disable fullscreen button
      autohide: 0, // Don't hide video controls automatically
      playsinline: 1, // Play inline on mobile devices
      listType: "playlist",
      list: playlist.join(","),
      volume: 100,
    },
  };

  const handlePlayClick = () => {
    console.log("handlePlayClick");
    setPlaying(true);
  };

  return (
    <MusicPlayerContainer>
      {playing && (
        <>
          <YouTube
            videoId={currentVideo}
            opts={opts}
            onEnd={() => {
              const nextIndex = playlist.indexOf(currentVideo) + 1;
              if (nextIndex < playlist.length) {
                setCurrentVideo(playlist[nextIndex]);
              } else {
                setPlaying(false);
                setCurrentVideo(playlist[0]);
              }
            }}
          />
          <h1>Playing ...</h1>
        </>
      )}
      <PlayBoxContainer>
        <button>
          <img src={previous} alt="previous" />
        </button>
        <button onClick={() => handlePlayClick()}>
          <img src={play} alt="play" />
        </button>
        <button>
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
