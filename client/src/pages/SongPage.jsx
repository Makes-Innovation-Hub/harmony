import { useEffect, useState } from "react";
import Header from "../components/Header";
import SongDetails from "../components/songDetails/SongDetails";
import { useLocation } from "react-router-dom";
import Lyrics from "../components/Lyrics";

function SongPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const songName = queryParams.get("song");
  const artistName = queryParams.get("artist");

  const [lyrics, setLyrics] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/v1/harmony/songs/searchSong?songName=${songName}&artistName=${artistName}`
        );
        const data = await response.json();
        if (data.success && data.data.length > 0) {
          const songData = data.data[0];
          const { lyrics, name } = songData;
          const titleData = {
            hebrew: name.hebrew,
            arabic: name.arabic,
          };
          setLyrics(lyrics);
          setTitle(titleData);
        } else {
          console.log("Lyrics not found");
        }
      } catch (error) {
        console.error("Error fetching lyrics:", error);
      }
    };

    fetchLyrics();
  }, [artistName, songName]);

  return (
    <>
      <Header />
      <SongDetails artistName={artistName} songName={songName} />
      {lyrics && title && (
        <Lyrics artist={artistName} title={title} lyrics={lyrics} />
      )}
    </>
  );
}

export default SongPage;
