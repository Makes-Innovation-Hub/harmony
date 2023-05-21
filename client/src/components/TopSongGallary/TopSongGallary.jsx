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
import { useEffect, useState } from "react";

export default function TopSongGallary() {
  
  const [ topArabicSingers, setTopArabicSingers ] = useState([])
  const [ topArabicSongs, setTopArabicSongs ] = useState([])
  const [ topHebrewSongs, setTopHebrewSongs ] = useState([])

  async function fetchTopArabicSongs() {
    try {
      const response = await fetch('http://localhost:5000/topArabicSongs');
      const data = await response.json();
      setTopArabicSingers(Object.keys(data))
      setTopArabicSongs(Object.values(data))
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  async function fetchTopHebrewSongs() {
    try {
      const response = await fetch('http://localhost:5000/topHebrewSongs');
      const data = await response.json();
      setTopHebrewSongs(data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  useEffect(()=> {
    fetchTopArabicSongs();
    fetchTopHebrewSongs();
  },[])

  return (
    <SongGallary>
      <TopHSongCountainer>
        <Title>Top Hebrew Songs</Title>
        <ImageBoxContainer>
        {topHebrewSongs?.map((song, index) => (
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
        {topArabicSongs?.map((singerName, index) => (
        <ImageBoxWithDetails key={index}
        img={cover4}
        artist={topArabicSingers[index]}
        songName={singerName}
        >
        </ImageBoxWithDetails>
         ))}
        </ImageBoxContainer>
      </TopASongCountainer>
    </SongGallary>
  );
}
