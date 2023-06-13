import { useState } from "react";
import { Box, Image, ImageBox, SongP, Songartist } from "./TopSongGallaryStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ImageBoxWithDetails({
  img,
  songName,
  artist,
  onClick,
}) {
  const [artistData, setArtistData] = useState(null);
  const navigate = useNavigate();

  const handleArtistClick = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/v1/harmony/artist/searchArtist",
        {
          params: {
            artistName: artist,
          },
        }
      );

      const { data } = response.data;
      if (data.length > 0) {
        const artistInfo = data[0];
        setArtistData(artistInfo);
        // console.log(artistInfo); // Log the artist data to the console
        navigate("/Artist", { state: { artistData: artistInfo } });
      }
    } catch (error) {
      console.error("Error retrieving artist data:", error);
    }
  };

  return (
    <ImageBox onClick={onClick}>
      <Image src={img}></Image>
      <Box>
        <SongP>{songName}</SongP>
        <Songartist onClick={handleArtistClick}>{artist}</Songartist>
      </Box>
    </ImageBox>
  );
}
