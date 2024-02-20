import React, { useState } from "react";
import { Box, Image, ImageBox, SongP, GenreType } from "./topPlaylistStyle";
import { useNavigate } from "react-router-dom";

const ImageBoxWithDetailsArabic = ({ img, mixName, genre }) => {
  const [isQueryExecuted, setIsQueryExecuted] = useState(false);
  const navigate = useNavigate();

  const handleMixClick = () => {
    navigate("/playlist", { state: { language: "arabic", mixName } });
  };

  const handleImageClick = () => {
    setIsQueryExecuted(true);
  };

  return (
    <ImageBox>
      <Image src={img} onClick={handleImageClick} />
      <Box>
        <SongP onClick={handleMixClick}>{mixName}</SongP>
        <GenreType genre={genre} />
      </Box>
    </ImageBox>
  );
};

export default ImageBoxWithDetailsArabic;
