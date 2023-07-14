import { YoutubeBox } from "./youtubeStyle";
import { usePostYoutubeSongMutation } from "../api/youtubeApiSlice";
import { useState, useEffect } from "react";

function Youtube({ songName, artistName }) {
  const [youtubeMutation, { isError, isLoading, data }] =
    usePostYoutubeSongMutation();

  useEffect(() => {
    if (!isError && !isLoading && data) {
      console.log("data", data);
    }
  }, [isError, isLoading, data]);

  console.log("song name is", songName, "artist name:", artistName);

  // const [youtubeSongDetails, setYoutubeSongDetails] = useState("");

  // const [youtubeSongID, setYoutubeSongID] = useState("");

  youtubeMutation({ songName, artistName });

  return (
    <div>
      <YoutubeBox>
        <iframe
          width="560"
          height="315"
          // src=`https://www.youtube.com/embed/${youtubeSongID}`
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </YoutubeBox>
    </div>
  );
}

export default Youtube;
