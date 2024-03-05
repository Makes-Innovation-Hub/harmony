import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import * as S from "./PlaylistSongPage.styled";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import { useNavigate } from "react-router-dom";
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo";

function PlaylistSongPage() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const navigate = useNavigate();
  const handlePlaylistTitleClick = () => {
    navigate("/playlist");
  };
  return (
    <>
      <Header />

      {currentPlaylistData && (
        <>
          <S.PlaylistTitle onClick={handlePlaylistTitleClick}>
            {currentPlaylistData.playlistName}
          </S.PlaylistTitle>

          <S.BigContainer>
            <S.ArtistContainer>
              <S.ProfileImgContainer>
                <S.ProfileImg
                  // Check if profilePicUrl is undefined
                  src={currentPlaylistData.currentSong.profilePicUrl}
                  alt="profile picture"
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

            <div>
              <YoutubeVideo
                youtubeUrl={currentPlaylistData.currentSong.videoId}
              />
            </div>
            <MusicPlayer />
          </S.BigContainer>
        </>
      )}
    </>
  );
}

export default PlaylistSongPage;
