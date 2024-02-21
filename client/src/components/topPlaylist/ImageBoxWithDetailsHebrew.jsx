import React, { useState } from "react";
import { Box, Image, ImageBox, SongP, GenreType } from "./topPlaylistStyle";
import { useNavigate } from "react-router-dom";

const ImageBoxWithDetailsHebrew = ({ img, mixName, genre }) => {
  const [isQueryExecuted, setIsQueryExecuted] = useState(false);
  const navigate = useNavigate();

  const handleMixClick = () => {
    navigate("/playlist", { state: { language: "hebrew", mixName } });
  };

  const handleImageClick = () => {
    setIsQueryExecuted(true);
  };

  return (
    <ImageBox onClick={handleMixClick}>
      <Image src={img} onClick={handleMixClick} />
      <Box>
        <SongP onClick={handleMixClick}>{mixName}</SongP>
        <GenreType genre={genre} />
      </Box>
    </ImageBox>
  );
};

export default ImageBoxWithDetailsHebrew;
