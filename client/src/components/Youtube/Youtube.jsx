import { OriginalSong, VideoContainer, YoutubeBox } from "./YoutubeStyle";

function Youtube({ youtubeUrl }) {
  return (
    <VideoContainer>
      <OriginalSong>Original Version </OriginalSong>
      <YoutubeBox>
        <iframe
          width="560"
          height="255"
          src={`https://www.youtube.com/embed/${youtubeUrl}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "30px" }}
        ></iframe>
      </YoutubeBox>
    </VideoContainer>
  );
}

export default Youtube;
