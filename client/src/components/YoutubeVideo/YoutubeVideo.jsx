import React from "react";
import { YoutubeBox } from "./YoutubeVideo.styled";
function YoutubeVideo({ youtubeUrl }) {
  return (
    <div>
      <YoutubeBox>
        <iframe
          width="329"
          height="188"
          src={`https://www.youtube.com/embed/${youtubeUrl}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "30px" }}
        ></iframe>
      </YoutubeBox>
    </div>
  );
}

export default YoutubeVideo;
