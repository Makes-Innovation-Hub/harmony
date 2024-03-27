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
import Animation from "../Animation/Animation.component";
import translatingGif from "../../assets/animations/translating-animation.gif";

export default function TopSongGallary() {
  const { data: topSongsAll = [], isLoading: topSongsIsLoading } =
    useGetTopSongsQuery();
  const { t } = useTranslation();

  return (
    <>
      {topSongsIsLoading ? (
        <Animation
          animationGif={translatingGif}
          animationText={["Loading top songs..."]}
        />
      ) : (
        <>
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
        </>
      )}
    </>
    // <SongGallary>
    //   <TopHSongCountainer>
    //     <Title>{t("top_hebrew")}</Title>
    //     <ImageBoxContainer>
    //       {topSongsAll.data &&
    //         topSongsAll.data.hebrewSongs.map((song, index) => (
    //           <ImageBoxWithDetails
    //             key={index}
    //             img={song.coverArt}
    //             artist={song.artist}
    //             songName={song.song}
    //           />
    //         ))}
    //     </ImageBoxContainer>
    //   </TopHSongCountainer>
    //   <TopASongCountainer>
    //     <Title>{t("top_arabic")}</Title>
    //     <ImageBoxContainer>
    //       {topSongsAll.data &&
    //         topSongsAll.data.arabicSongs.map((song, index) => (
    //           <ImageBoxWithDetails
    //             key={index}
    //             img={song.coverArt}
    //             artist={song.artist}
    //             songName={song.song}
    //           />
    //         ))}
    //     </ImageBoxContainer>
    //   </TopASongCountainer>
    // </SongGallary>
  );
}
