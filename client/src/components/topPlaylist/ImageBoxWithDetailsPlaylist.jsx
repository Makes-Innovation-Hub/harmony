import React, { useEffect } from "react";
import { Box, Image, ImageBox, SongP } from "./PlaylistStyle.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setPlaylist,
  setCurrentSong,
  playSong,
} from "../../Redux/playlistSlice.js";

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
    if (data.playlistId !== playlistId || data.playlistId === null) {
      dispatch(
        setPlaylist({
          playlist: null,
          playlistId: playlistId,
          playlistName: mixName,
          playlistLanguage: playlistLanguage,
        })
      );
      dispatch(
        setCurrentSong({
          currentSong: null,
          songIndex: 0,
          direction: "left",
        })
      );
      dispatch(playSong(false));
    }
    navigate(
      `/playlist?id=${playlistId}&name=${mixName}&language=${playlistLanguage}`
    );
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
