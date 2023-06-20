import { useEffect, useState } from "react";
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
  const { data, isLoading } = useGetArtistDataQuery(artist, {
    skip: !isQueryExecuted, // Skip the query if isQueryExecuted is false
  });

  const handleArtistClick = () => {
    setIsQueryExecuted(true); // Set the flag to true when the artist is clicked
  };

  // Trigger navigation when the data is available
  useEffect(() => {
    if (!isLoading && data) {
      const artistInfo = data;
      setArtistData(artistInfo);
      navigate("/Artist", { state: { artistData: artistInfo } });
    }
  }, [data, isLoading, navigate]);

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
