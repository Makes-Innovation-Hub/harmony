import { Box, Image, ImageBox, SongP, Songartist } from "./TopSongGallaryStyle";
// eslint-disable-next-line react/prop-types
export default function ImageBoxWithDetails({
  img,
  songName,
  artist,
  onClick,
}) {
  return (
    <ImageBox onClick={onClick}>
      <Image src={img}></Image>
      <Box>
        <SongP>{songName}</SongP>
        <Songartist>{artist}</Songartist>
      </Box>
    </ImageBox>
  );
}
