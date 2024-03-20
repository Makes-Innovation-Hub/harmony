import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import * as S from "./PlaylistSongPage.styled";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import { useNavigate, useSearchParams } from "react-router-dom";
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo";
import { useGetPlaylistByIdQuery } from "../../api/playlistApiSlice";
import { setCurrentSong, setPlaylist } from "../../Redux/playlistSlice";
import { getSongIndex } from "../../utils/arrayHelpers";
import Animation from "../../components/Animation/Animation.component";
import translatingGif from "../../assets/animations/translating-animation.gif";
import Image from "../../components/Image/Image";

function PlaylistSongPage() {
  const [animationKey, setAnimationKey] = useState(0);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const songIdQuery = searchParams.get("songId");
  const playlistIdQuery = searchParams.get("playlistId");
  const playlistNameQuery = searchParams.get("name");
  const playlistLanguageQuery = searchParams.get("language");
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  let dataIsAvailable = currentPlaylistData.playlist !== null;
  const navigate = useNavigate();
  const handlePlaylistTitleClick = () => {
    navigate(
      `/playlist?id=${playlistIdQuery}&name=${playlistNameQuery}&language=${playlistLanguageQuery}`
    );
  };
  const { data: playlistQueryData, isSuccess } = useGetPlaylistByIdQuery(
    {
      id: playlistIdQuery,
      lang: playlistLanguageQuery,
    },
    { skip: dataIsAvailable }
  );
  useEffect(() => {
    if (!dataIsAvailable && isSuccess) {
      const songIndex = getSongIndex(playlistQueryData, songIdQuery);

      dispatch(
        setPlaylist({
          playlist: playlistQueryData,
          playlistId: playlistIdQuery,
          playlistName: playlistNameQuery,
          playlistLanguage: playlistLanguageQuery,
        })
      );
      dispatch(
        setCurrentSong({
          currentSong: playlistQueryData[songIndex],
          songIndex: songIndex,
          direction: "left",
        })
      );
      dataIsAvailable = true;
    }
  }, [isSuccess]);
  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
    if (currentPlaylistData.currentSong !== null) {
      const songId = currentPlaylistData.currentSong.videoId;
      setSearchParams({
        songId: songId,
        playlistId: currentPlaylistData.playlistId,
        name: currentPlaylistData.playlistName,
        language: currentPlaylistData.playlistLanguage,
      });
      // navigate(
      //   `/playlistSongPage?songId=${songId}&playlistId=${currentPlaylistData.playlistId}&name=${currentPlaylistData.playlistName}&language=${currentPlaylistData.playlistLanguage}`
      // );
    }
  }, [currentPlaylistData.currentSongIndex, currentPlaylistData.currentSong]);
  return (
    <>
      <Header />
      {!isSuccess && !dataIsAvailable && (
        <Animation
          animationGif={translatingGif}
          animationText={["Loading song ..."]}
        />
      )}

      {dataIsAvailable && (
        <>
          <S.PlaylistTitle onClick={handlePlaylistTitleClick}>
            {currentPlaylistData.playlistName}
          </S.PlaylistTitle>
          <S.BigContainer>
            <S.SongDataContainer
              key={animationKey}
              direction={currentPlaylistData.animationDirection}
            >
              <S.ArtistContainer>
                <S.ProfileImgContainer>
                  <Image
                    name={currentPlaylistData.currentSong.profilePicUrl}
                    alt={"profile picture"}
                    styles={S.ProfileImg}
                  />
                </S.ProfileImgContainer>

                <S.SongAndSingerContainer>
                  <S.SongName>
                    {currentPlaylistData.currentSong.songName3Lang.english}
                  </S.SongName>
                  <S.OriginalArtistName>
                    {currentPlaylistData.currentSong.channelTitle}
                  </S.OriginalArtistName>
                </S.SongAndSingerContainer>
              </S.ArtistContainer>

              <YoutubeVideo
                youtubeUrl={currentPlaylistData.currentSong.videoId}
              />
            </S.SongDataContainer>

            <MusicPlayer />
          </S.BigContainer>
        </>
      )}
    </>
  );
}

export default PlaylistSongPage;
