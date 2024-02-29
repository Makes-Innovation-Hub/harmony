import React from "react";
import YouTube from "react-youtube";

const AudioPlayer = () => {
  // YouTube video ID
  const videoId = "YOUR_VIDEO_ID";

  // Player configuration
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
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default AudioPlayer;
