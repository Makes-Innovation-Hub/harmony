import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";

function PlaylistSongPage() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  useEffect(() => {
    console.log(currentPlaylistData);
  }, [currentPlaylistData]);

  return (
    <>
      <Header />
      <div>PlaylistSongPage</div>
      {currentPlaylistData && (
        <>
          <h1>{currentPlaylistData.currentSong.title}</h1>
        </>
      )}
    </>
  );
}

export default PlaylistSongPage;
