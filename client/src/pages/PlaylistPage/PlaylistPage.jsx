import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";

function PlaylistPage() {
  const data = useSelector((state) => state.currentplaylist);
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <>
      <Header />
      <h3>{data.playlistName}</h3>
    </>
  );
}

export default PlaylistPage;
