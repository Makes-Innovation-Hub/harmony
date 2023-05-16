import { Box, Image, ImageBox, ImageBoxContainer, SongP, Songartist, Title, TopASongCountainer, TopHSongCountainer } from './TopSongGallaryStyle';
import albumcover from '../../assets/TopSong/eden.jpg';
import cover2 from '../../assets/TopSong/aden.jpg';
import cover3 from '../../assets/TopSong/nasif.jpg';
import cover4 from '../../assets/TopSong/amrdiab.jpg';

export default function TopSongGallary() {
  return (
    <>
      <TopHSongCountainer>
        <Title>Top Hebrow Songs</Title>
        <ImageBoxContainer>
          <ImageBox>
            <Image src={albumcover}></Image>
            <Box>
              <SongP>Eden Ben Zaken</SongP>
              <Songartist>To The Winner</Songartist>
            </Box>
          </ImageBox>
          <ImageBox>
            <Image src={cover2}></Image>
            <Box>
              <SongP>Eden Hason</SongP>
              <Songartist>SomeOne Stop Me</Songartist>
            </Box>
          </ImageBox>
        </ImageBoxContainer>
      </TopHSongCountainer>
      <TopASongCountainer>
        <Title>Top Arabic Songs</Title>
        <ImageBoxContainer>
          <ImageBox>
            <Image src={cover3}></Image>
            <Box>
              <SongP>Nassif Zayton</SongP>
              <Songartist>Fourth time</Songartist>
            </Box>
          </ImageBox>
          <ImageBox>
            <Image src={cover4}></Image>
            <Box>
              <SongP>Amr Diab</SongP>
              <Songartist>Tonight</Songartist>
            </Box>
          </ImageBox>
        </ImageBoxContainer>
      </TopASongCountainer>
    </>
  );
}
