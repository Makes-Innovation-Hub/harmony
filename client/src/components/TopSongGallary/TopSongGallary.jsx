import {
  ImageBoxContainer,
  SongGallary,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
} from "./TopSongGallaryStyle";
import cover1 from "../../assets/TopSongGallary/Rectangle 3.png";
import cover4 from "../../assets/TopSongGallary/Rectangle 1.png";
import ImageBoxWithDetails from './ImageBoxWithDetails'
import { useGetTopHebrewSongsQuery } from "../../api/hebrewApiSlice";
import { useGetTopArabicSongsQuery } from '../../api/arabicApiSlice'


export default function TopSongGallary() {
  const { data: topHebrewSongs = [] } = useGetTopHebrewSongsQuery();
  const { data: topArabicSongs = [] } = useGetTopArabicSongsQuery();
  const topArabicSongsArray = Object.entries(topArabicSongs).map(([artist, song]) => ({
    artist,
    songName: song,
  }));

  return (
    <SongGallary>
      <TopHSongCountainer>
        <Title>Top Hebrew Songs</Title>
        <ImageBoxContainer>
        {topHebrewSongs.map((song, index) => (
            <ImageBoxWithDetails
              key={index}
              img={cover1}
              artist={Object.keys(song)[0]}
              songName={Object.values(song)[0]}
            />
          ))}
        </ImageBoxContainer>
      </TopHSongCountainer>
      <TopASongCountainer>
        <Title>Top Arabic Songs</Title>
        <ImageBoxContainer>
        {topArabicSongsArray.map((song, index) => (
            <ImageBoxWithDetails
              key={index}
              img={cover4}
              artist={song.artist}
              songName={song.songName}
            />
          ))}
        </ImageBoxContainer>
      </TopASongCountainer>
    </SongGallary>
  );
}