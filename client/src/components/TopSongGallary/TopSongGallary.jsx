import {
  ImageBoxContainer,
  SongGallary,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
} from "./TopSongGallaryStyle";
import { useState } from "react";
import ImageBoxWithDetails from "./ImageBoxWithDetails";
import { useGetTopHebrewSongsQuery } from "../../api/hebrewApiSlice";
import { useGetTopArabicSongsQuery } from "../../api/arabicApiSlice";
import { useLazyGetLyricsQuery } from "../../api/lyricsApiSlice";

export default function TopSongGallary() {
  const { data: topHebrewSongs = [] } = useGetTopHebrewSongsQuery();
  const { data: topArabicSongs = [] } = useGetTopArabicSongsQuery();
  const [trigger, { data }] = useLazyGetLyricsQuery();    

  const [songLyrics, setSongLyrics] = useState([]);

  const handleSongClick = (artist, songName) => {
    if (!data) {
      console.log("NO LYRICS FOUND!");
      // (navigate("/Artur`s Page"))
    }
    setSongLyrics(data);
    trigger({ artistName: artist, songName: songName });
  };

  return (
    <SongGallary>
      <TopHSongCountainer>
        <Title>Top Hebrew Songs</Title>
        <ImageBoxContainer>
          {topHebrewSongs.map((song, index) => (
            <ImageBoxWithDetails
              key={index}
              img={song.coverArt} 
              artist={Object.keys(song)[0]}
              songName={Object.values(song)[0]}
              onClick={() =>
                handleSongClick(Object.keys(song)[0], Object.values(song)[0])
              }
            />
          ))}
        </ImageBoxContainer>
      </TopHSongCountainer>
      <TopASongCountainer>
        <Title>Top Arabic Songs</Title>
        <ImageBoxContainer>
          {topArabicSongs.songsArr && topArabicSongs.songsArr.map((songObject,index) => (
            <ImageBoxWithDetails
              key={index}
              img={songObject.coverArt}
              artist={songObject.artist}
              songName={songObject.song}
              onClick={() => handleSongClick(songObject.artist, songObject.song)}
            />
          ))}
        </ImageBoxContainer>
      </TopASongCountainer>
    </SongGallary>
  );
}
