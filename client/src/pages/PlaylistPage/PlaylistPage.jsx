import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import translatingGif from "../../assets/animations/translating-animation.gif";
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
import Animation from "../../components/Animation/Animation.component.jsx";

function PlaylistPage() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const dispatch = useDispatch();

  // Only call the query if the playlist length is zero
  const shouldFetchPlaylist = currentPlaylistData.playlist.length === 0;

  const { data: playlistQueryData, isSuccess } = useGetPlaylistByIdQuery(
    {
      id: currentPlaylistData.playlistId,
      lang: currentPlaylistData.playlistLanguage,
    },
    { skip: !shouldFetchPlaylist }
  );

  useEffect(() => {
    if (isSuccess) {
      dispatch(populatePlaylistArray(playlistQueryData));
    }
  }, [isSuccess]);

  return (
    <PageWrapper>
      <Header />
      {!isSuccess && shouldFetchPlaylist && (
        <Animation
          animationGif={translatingGif}
          animationText={["Loading playlist..."]}
        />
      )}

      <PlaylistTitle>{currentPlaylistData.playlistName}</PlaylistTitle>
      {(isSuccess || !shouldFetchPlaylist) && (
        <>
          <FlexGrowContainer flexGrow="6" padding="0 0.8rem">
            <ContentWrapper>
              {currentPlaylistData.playlist.map((song, index) => (
                <SongInPlaylist
                  key={index}
                  songIndex={index}
                  artist={"artistData.name.hebrew"}
                  arabicName={song.songName3Lang.arabic}
                  hebrewName={song.songName3Lang.hebrew}
                  englishName={song.songName3Lang.english}
                  imgURL={song.profilePicUrl}
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
