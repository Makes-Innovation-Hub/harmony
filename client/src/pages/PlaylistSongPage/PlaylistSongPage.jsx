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
import Youtube from "../../components/Youtube/Youtube";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";

function PlaylistSongPage() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  useEffect(() => {
    if (currentPlaylistData) console.log(currentPlaylistData);
  }, [currentPlaylistData]);
  return (
    <>
      <Header />

      {currentPlaylistData && (
        <>
          <PlaylistTitle>{currentPlaylistData.playlistName}</PlaylistTitle>
          {/* <h5>{currentPlaylistData.currentSong.title}</h5> */}
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
              <Youtube
                youtubeUrl={currentPlaylistData.currentSong.videoId}
                handleAddView={() => {}}
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
