import { useEffect, useState } from "react";
import { Box, Image, ImageBox, SongP, Songartist } from "./TopSongGallaryStyle";
import { useNavigate } from "react-router-dom";
import { useGetArtistDataQuery } from "../../api/artistApiSlice";

export default function ImageBoxWithDetails({ img, artist, songName }) {
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
      state: { artist, song: songName, coverArt: img },
    });
  };

  return (
    <ImageBox>
      <Image src={img} onClick={handleImageClick} />
      <Box>
        <SongP onClick={handleImageClick}>{songName}</SongP>
        <Songartist onClick={handleArtistClick}>{artist}</Songartist>
      </Box>
    </ImageBox>
  );
}
