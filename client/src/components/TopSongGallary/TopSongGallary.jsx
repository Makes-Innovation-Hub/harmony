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

import { useTranslation } from "react-i18next";

export default function TopSongGallary() {
  const { data: topSongsAll = [] } = useGetTopArabicSongsQuery();
  const [trigger, { data }] = useLazyGetLyricsQuery();
  const [songLyrics, setSongLyrics] = useState([]);

  const { t } = useTranslation();
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
        <Title>{t("top_hebrew")}</Title>
        <ImageBoxContainer>
          { topSongsAll.data &&
            topSongsAll.data.hebrewSongs.map((song, index) => (
            <ImageBoxWithDetails
              key={index}
              img={song.coverArt}
              artist={song.artist}
              songName={song.songName}
              onClick={() =>
                handleSongClick(Object.keys(song)[0], Object.values(song)[0])
              }
            />
          ))}
        </ImageBoxContainer>
      </TopHSongCountainer>
      <TopASongCountainer>
        <Title>{t("top_arabic")}</Title>
        <ImageBoxContainer>
          {topSongsAll.data &&
            topSongsAll.data.arabicSongs.map((song, index) => (
              <ImageBoxWithDetails
                key={index}
                img={song.coverArt}
                artist={song.artist}
                songName={song.song}
                onClick={() => handleSongClick(song.artist, song.song)}
              />
            ))}
        </ImageBoxContainer>
      </TopASongCountainer>
    </SongGallary>
  );
}
