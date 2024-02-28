import { OriginalSong, YoutubeBox } from "./YoutubeStyle";

function Youtube({ songName, artistName, youtubeUrl, handleAddView }) {
  return (
    <div>
      <OriginalSong>Original Version </OriginalSong>
      <YoutubeBox onClick={handleAddView}>
        <iframe
          width="560"
          height="255"
          src={`https://www.youtube.com/embed/${youtubeUrl}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "30px" }}
        ></iframe>
      </YoutubeBox>
    </div>
  );
}

export default Youtube;
