import React from "react";
import play from "../../assets/musicPlayer/play.png";
import pause from "../../assets/musicPlayer/pause.png";
import next from "../../assets/musicPlayer/next.png";
import previous from "../../assets/musicPlayer/previous.png";
import shuffle from "../../assets/musicPlayer/shuffle.png";
import { MusicPlayerContainer, PlayBoxContainer } from "./MusicPlayer.styled";
// import blueShuffle from "../../assets/musicPlayer/blue-shuffle.png";

function MusicPlayer() {
  return (
    <MusicPlayerContainer>
      <PlayBoxContainer>
        <button>
          <img src={previous} alt="previous" />
        </button>
        <button>
          <img src={play} alt="previous" />
        </button>
        <button>
          <img src={next} alt="previous" />
        </button>
      </PlayBoxContainer>
      <div>
        <button>
          <img src={shuffle} alt="previous" />
        </button>
      </div>
    </MusicPlayerContainer>
  );
}

export default MusicPlayer;
