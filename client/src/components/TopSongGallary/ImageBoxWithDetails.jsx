import { Box, Image, ImageBox, SongP, Songartist } from "./TopSongGallaryStyle";
// eslint-disable-next-line react/prop-types
export default function ImageBoxWithDetails({ img, songName, artist }) {
    return (
      <ImageBox>
        <Image src={img}></Image>
        <Box>
          <SongP>{songName}</SongP>
          <Songartist>{artist}</Songartist>
        </Box>
      </ImageBox>
    );
  }