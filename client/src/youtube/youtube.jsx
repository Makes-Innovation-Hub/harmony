import { YoutubeBox } from "./youtubeStyle";
import { usePostYoutubeSongMutation } from "../api/youtubeApiSlice";
import { useState, useEffect } from "react";

function Youtube({ songName, artistName }) {
  const [youtubeMutation, { isError, isLoading, data }] =
    usePostYoutubeSongMutation();

  // useEffect(() => {
  //   if (!isError && !isLoading && data) {
  //     console.log("data from muatsion", data);
  //   }
  // }, [isError, isLoading, data]);

  // console.log("song name is", songName, "artist name:", artistName);

  const [youtubeSongID, setYoutubeSongID] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await youtubeMutation({ songName, artistName });
        console.log("data from mutation", response.data);
        setYoutubeSongID(response.data.songId);
      } catch (error) {
        console.error("Error occurred while fetching data:", error);
      }
    };

    fetchData();
  }, [songName, artistName, youtubeMutation]);

  // console.log("song name is", songName, "artist name:", artistName);

  return (
    <div>
      <YoutubeBox>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${youtubeSongID}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </YoutubeBox>
    </div>
  );
}

export default Youtube;
