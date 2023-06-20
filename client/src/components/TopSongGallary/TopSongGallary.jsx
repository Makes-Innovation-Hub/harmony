import {
  ImageBoxContainer,
  SongGallary,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
} from "./TopSongGallaryStyle";
import ImageBoxWithDetails from "./ImageBoxWithDetails";
import { useGetTopArabicSongsQuery } from "../../api/arabicApiSlice";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function TopSongGallary() {
  const { data: topSongsAll = [] } = useGetTopArabicSongsQuery();
  const navigate = useNavigate()
  const { t } = useTranslation();
  const handleSongClick = (artist, songName) => {
    navigate('/translating')
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
                songName={song.song}
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
