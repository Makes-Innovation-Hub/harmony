import React from "react";
import { Box, Image, ImageBox, SongP, GenreType } from "./topPlaylistStyle.js";
import { useNavigate } from "react-router-dom";

function ImageBoxWithDetails({ img, mixName, genre }) {
  const navigate = useNavigate();
  const handleMixClick = () => {
    navigate("/playlist");
  };
  return (
    <ImageBox>
      <Image src={img} onClick={handleMixClick} />
      <Box>
        <SongP onClick={handleMixClick}>{mixName}</SongP>
        <GenreType genre={genre} />
      </Box>
    </ImageBox>
  );
}

export default ImageBoxWithDetails;
