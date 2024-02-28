import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useGetPlaylistByIdQuery } from "../../api/playlistApiSlice";
import { populatePlaylistArray } from "../../Redux/playlistSlice.js";
import {
  ContentWrapper,
  PageWrapper,
  PlaylistTitle,
} from "./PlaylistPage.styled.js";
import FlexGrowContainer from "../../components/FlexGrowContainer/FlexGrowContainer";
import SongInPlaylist from "../../components/SongInPlaylist/SongInPlaylist.jsx";

function PlaylistPage() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const dispatch = useDispatch();
  const { data: playlistQueryData, isSuccess } = useGetPlaylistByIdQuery({
    id: currentPlaylistData.playlistId,
    lang: currentPlaylistData.playlistLanguage,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(populatePlaylistArray(playlistQueryData));
    }
  }, [isSuccess]);
  return (
    <PageWrapper>
      <Header />
      {isSuccess && (
        <>
          <PlaylistTitle>{currentPlaylistData.playlistName}</PlaylistTitle>

          <FlexGrowContainer flexGrow="6" padding="0 0.8rem">
            <ContentWrapper>
              {playlistQueryData.map((song, index) => (
                <SongInPlaylist
                  key={index}
                  songIndex={index}
                  artist={"artistData.name.hebrew"}
                  arabicName={song.songName3Lang.arabic}
                  hebrewName={song.songName3Lang.hebrew}
                  englishName={song.songName3Lang.english}
                  imgURL={song.profilePicUrl}
                  isPlaying={index === 0 ? true : false}
                />
              ))}
            </ContentWrapper>
          </FlexGrowContainer>
        </>
      )}
    </PageWrapper>
  );
}

export default PlaylistPage;
