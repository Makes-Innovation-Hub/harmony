import {
    ImageBoxContainer,
    SongGallary,
    Title,
    TopASongCountainer,
    TopHSongCountainer,
} from "./TopSongGallaryStyle";
import { useState } from "react";
import cover1 from "../../assets/TopSongGallary/Rectangle 3.png";
import cover4 from "../../assets/TopSongGallary/Rectangle 1.png";
import ImageBoxWithDetails from "./ImageBoxWithDetails";
import { useGetTopHebrewSongsQuery } from "../../api/hebrewApiSlice";
import { useGetTopArabicSongsQuery } from "../../api/arabicApiSlice";
import { useLazyGetLyricsQuery } from "../../api/lyricsApiSlice";

import { useTranslation } from "react-i18next";

export default function TopSongGallary() {
    const { data: topHebrewSongs = [] } = useGetTopHebrewSongsQuery();
    const { data: topArabicSongs = [] } = useGetTopArabicSongsQuery();
    const topArabicSongsArray = Object.entries(topArabicSongs).map(
        ([artist, song]) => ({
            artist,
            songName: song,
        })
    );

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
                    {topHebrewSongs.map((song, index) => (
                        <ImageBoxWithDetails
                            key={index}
                            img={cover1}
                            artist={Object.keys(song)[0]}
                            songName={Object.values(song)[0]}
                            onClick={() =>
                                handleSongClick(
                                    Object.keys(song)[0],
                                    Object.values(song)[0]
                                )
                            }
                        />
                    ))}
                </ImageBoxContainer>
            </TopHSongCountainer>
            <TopASongCountainer>
                <Title>{t("top_arabic")}</Title>
                <ImageBoxContainer>
                    {topArabicSongsArray.map((song, index) => (
                        <ImageBoxWithDetails
                            key={index}
                            img={cover4}
                            artist={song.artist}
                            songName={song.songName}
                            onClick={() =>
                                handleSongClick(song.artist, song.songName)
                            }
                        />
                    ))}
                </ImageBoxContainer>
            </TopASongCountainer>
        </SongGallary>
    );
}
