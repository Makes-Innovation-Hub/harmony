import {
  ImageBoxContainer,
  SongGallary,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
} from "./TopSongGallaryStyle";
import cover1 from "../../assets/TopSongGallary/Rectangle 3.png";
import cover2 from "../../assets/TopSongGallary/Rectangle 2.png";
import cover4 from "../../assets/TopSongGallary/Rectangle 1.png";
import cover5 from "../../assets/TopSongGallary/Rectangle 4.png";
import ImageBoxWithDetails from './ImageBoxWithDetails'
export default function TopSongGallary() {
  return (
    <SongGallary>
      <TopHSongCountainer>
        <Title>Top Hebrew Songs</Title>
        <ImageBoxContainer>
          <ImageBoxWithDetails
            img={cover1}
            songName="Body"
            artist="Dance"
          />
          <ImageBoxWithDetails
            img={cover2}
            songName="I loved her"
            artist="Shlomo Artizi"
          />
          <ImageBoxWithDetails 
          img={cover2}
          songName="I loved her"
          artist="Shlomo Artizi"
          >
          </ImageBoxWithDetails>
        </ImageBoxContainer>
      </TopHSongCountainer>
      <TopASongCountainer>
        <Title>Top Arabic Songs</Title>
        <ImageBoxContainer>
          <ImageBoxWithDetails
            img={cover4}
            songName="Out of my mind"
            artist="Salim the great"
          />
          <ImageBoxWithDetails
            img={cover5}
            songName="Freck In Me"
            artist="Muhammad Band"
          />
          <ImageBoxWithDetails
           img={cover5} 
           songName="Freck In Me"
            artist="Muhammad Band">
          </ImageBoxWithDetails>
        </ImageBoxContainer>
      </TopASongCountainer>
    </SongGallary>
  );
}
