import React from "react";
import { Box, Image, ImageBox, SongP } from "./PlaylistStyle.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlaylist } from "../../Redux/playlistSlice.js";

function ImageBoxWithDetailsPlaylist({
  img,
  mixName,
  genre,
  playlistId,
  playlistLanguage,
}) {
  const data = useSelector((state) => state.currentplaylist);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMixClick = () => {
    console.log(data);
    //TODO If add check if the song is playing
    if (!data.playlistId === playlistId) {
      dispatch(
        setPlaylist({
          playlist: [],
          playlistId: playlistId,
          playlistName: mixName,
          playlistLanguage: playlistLanguage,
        })
      );
    }

    navigate("/playlist");
  };
  return (
    <ImageBox>
      <Image src={img} onClick={handleMixClick} />
      <Box>
        <SongP onClick={handleMixClick}>{genre}</SongP>
      </Box>
    </ImageBox>
  );
}

export default ImageBoxWithDetailsPlaylist;
