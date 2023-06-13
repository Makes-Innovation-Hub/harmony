import { useState } from "react";
import { Box, Image, ImageBox, SongP, Songartist } from "./TopSongGallaryStyle";
import { useNavigate } from "react-router-dom";
import { useGetArtistDataQuery } from "../../api/artistApiSlice"; // Import the artistApiSlice

export default function ImageBoxWithDetails({
  img,
  songName,
  artist,
  onClick,
}) {
  const [artistData, setArtistData] = useState(null);
  const navigate = useNavigate();
  const [isQueryExecuted, setIsQueryExecuted] = useState(false);

  // Use the useGetArtistDataQuery hook to fetch artist data from the slice
  const { data } = useGetArtistDataQuery(artist, {
    skip: !isQueryExecuted, // Skip the query if isQueryExecuted is false
  });

  const handleArtistClick = () => {
    if (data) {
      const artistInfo = data;
      setArtistData(artistInfo);
      navigate("/Artist", { state: { artistData: artistInfo } });
    } else {
      setIsQueryExecuted(true); // Set the flag to true when the artist is clicked
    }
  };

  return (
    <ImageBox onClick={onClick}>
      <Image src={img}></Image>
      <Box>
        <SongP>{songName}</SongP>
        <Songartist>{artist}</Songartist>
        <Songartist onClick={handleArtistClick}>{artist}</Songartist>
      </Box>
    </ImageBox>
  );
}
