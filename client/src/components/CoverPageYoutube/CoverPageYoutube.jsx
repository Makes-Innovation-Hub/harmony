import { OriginalSong, PlayVideo, YoutubeBox } from "./CoverPageYoutubeStyle";

function Youtube({
  songName,
  artistName,
  youtubeUrl,
  handleAddView,
  playVideoDiv,
}) {
  return (
    <div>
      <OriginalSong>Original Version </OriginalSong>
      <YoutubeBox>
        <PlayVideo $visible={playVideoDiv} onClick={handleAddView}></PlayVideo>
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