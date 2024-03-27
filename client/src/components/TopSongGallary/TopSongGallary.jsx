import {
  ImageBoxContainer,
  SongGallary,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
} from "./TopSongGallaryStyle";
import ImageBoxWithDetails from "./ImageBoxWithDetails";
import { useGetTopSongsQuery } from "../../api/topSongsSlice";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function TopSongGallary({ availableData, handleData }) {
  const { data: topSongsAll = [], isSuccess } = useGetTopSongsQuery();
  const { t } = useTranslation();

  useEffect(() => {
    if (isSuccess) {
      handleData({ ...availableData, TopSongGallary: true });
    }
  }, [isSuccess]);

  return (
    <SongGallary>
      <TopHSongCountainer>
        <Title>{t("top_hebrew")}</Title>
        <ImageBoxContainer>
          {topSongsAll.data &&
            topSongsAll.data.hebrewSongs.map((song, index) => (
              <ImageBoxWithDetails
                key={index}
                img={song.coverArt}
                artist={song.artist}
                songName={song.song}
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
              />
            ))}
        </ImageBoxContainer>
      </TopASongCountainer>
    </SongGallary>
  );
}
