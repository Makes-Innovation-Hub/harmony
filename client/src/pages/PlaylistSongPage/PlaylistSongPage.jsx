import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import {
  ArtistContainer,
  BigContainer,
  OriginalArtistName,
  PlaylistTitle,
  SongAndSingerContainer,
  SongCover,
  SongName,
} from "./PlaylistSongPage.styled";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";
import { useNavigate } from "react-router-dom";
import YoutubeVideo from "../../components/YoutubeVideo/YoutubeVideo";

function PlaylistSongPage() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (currentPlaylistData) {
  //     console.log(currentPlaylistData);
  //   }
  // }, [currentPlaylistData]);
  const handlePlaylistTitleClick = () => {
    navigate("/playlist");
  };
  return (
    <>
      <Header />

      {currentPlaylistData && (
        <>
          <PlaylistTitle onClick={handlePlaylistTitleClick}>
            {currentPlaylistData.playlistName}
          </PlaylistTitle>
          {/* <h5>
            {
              currentPlaylistData.playlist[currentPlaylistData.currentSongIndex]
                .title
            }
          </h5> */}
          <BigContainer>
            <ArtistContainer>
              <div>
                <SongCover
                  src={currentPlaylistData.currentSong.profilePicUrl}
                  alt="profile picture"
                />
              </div>

              <SongAndSingerContainer>
                <SongName>
                  {currentPlaylistData.currentSong.songName3Lang.english}
                </SongName>
                <OriginalArtistName>
                  {currentPlaylistData.currentSong.channelTitle}
                </OriginalArtistName>
              </SongAndSingerContainer>
            </ArtistContainer>

            <div>
              <YoutubeVideo
                youtubeUrl={currentPlaylistData.currentSong.videoId}
              />
            </div>
            <MusicPlayer />
          </BigContainer>
        </>
      )}
    </>
  );
}

export default PlaylistSongPage;
