import {
  Box,
  Image,
  ImageBox,
  ImageBoxContainer,
  SongGallary,
  SongP,
  Songartist,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
} from "./TopSongGallaryStyle";
import cover1 from "../../assets/TopSongGallary/Rectangle 3.png";
import cover2 from "../../assets/TopSongGallary/Rectangle 2.png";
import cover4 from "../../assets/TopSongGallary/Rectangle 1.png";
import cover5 from "../../assets/TopSongGallary/Rectangle 4.png";

export default function TopSongGallary() {
  return (
    <SongGallary>
      <TopHSongCountainer>
        <Title>Top Hebrow Songs</Title>
        <ImageBoxContainer>
          <ImageBox>
            <Image src={cover1}></Image>
            <Box>
              <SongP>Body</SongP>
              <Songartist>Dance</Songartist>
            </Box>
          </ImageBox>
          <ImageBox>
            <Image src={cover2}></Image>
            <Box>
              <SongP> I loved her</SongP>
              <Songartist>Shlomo Artizi</Songartist>
            </Box>
          </ImageBox>
          <ImageBox>
            <Image src={cover2}></Image>
          </ImageBox>
        </ImageBoxContainer>
      </TopHSongCountainer>
      <TopASongCountainer>
        <Title>Top Arabic Songs</Title>
        <ImageBoxContainer>
          <ImageBox>
            <Image src={cover4}></Image>
            <Box>
              <SongP> Out of my mine</SongP>
              <Songartist>Salim the great</Songartist>
            </Box>
          </ImageBox>
          <ImageBox>
            <Image src={cover5}></Image>
            <Box>
              <SongP>Freck In Me</SongP>
              <Songartist>Muhammad Band</Songartist>
            </Box>
          </ImageBox>
          <ImageBox>
            <Image src={cover5}></Image>
          </ImageBox>
        </ImageBoxContainer>
      </TopASongCountainer>
    </SongGallary>
  );
}
