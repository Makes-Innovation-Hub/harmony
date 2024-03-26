import { PlayVideo, YoutubeBox } from "./CoverPageYoutubeStyle";

function Youtube({ youtubeUrl, handleAddView, playVideoDiv }) {
  return (
    <div>
      <YoutubeBox>
        <PlayVideo $visible={playVideoDiv} onClick={handleAddView}></PlayVideo>
        <iframe
          width="560"
          height="255"
          src={`https://www.youtube.com/embed/${youtubeUrl}${
            playVideoDiv ? "?autoplay=1" : "?autoplay=0"
          }`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ borderRadius: "30px" }}
        ></iframe>
      </YoutubeBox>
    </div>
  );
}

export default Youtube;
