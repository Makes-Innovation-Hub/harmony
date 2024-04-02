import { useEffect, useState } from "react";
import { Box, Image, ImageBox, SongArtist, SongP } from "./SongGalleryStyle";
import { useNavigate } from "react-router-dom";
import { useGetArtistDataQuery } from "../../api/artistApiSlice";

export default function ImageBoxWithDetails({ img, artist, songName, songId }) {
  const [isQueryExecuted, setIsQueryExecuted] = useState(false);
  const { data, isLoading } = useGetArtistDataQuery(artist, {
    skip: !isQueryExecuted,
  });
  const navigate = useNavigate();

  const handleArtistClick = () => {
    setIsQueryExecuted(true);
  };

  useEffect(() => {
    if (!isLoading && data) {
      const encodedArtist = encodeURIComponent(artist);

      navigate(`/Artist/${encodedArtist}`, { state: { artistData: data } });
    }
  }, [data, isLoading, navigate]);

  const handleImageClick = () => {
    navigate("/translating", {
      state: { artist, song: songName, coverArt: img, songId },
    });
  };

  return (
    <ImageBox>
      <Image src={img} onClick={handleImageClick} />
      <Box>
        <SongP onClick={handleImageClick}>{songName}</SongP>
        <SongArtist onClick={handleArtistClick}>{artist}</SongArtist>
      </Box>
    </ImageBox>
  );
}
