import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import translatingGif from "../../assets/animations/translating-animation.gif";
import { useDispatch, useSelector } from "react-redux";
import { useGetPlaylistByIdQuery } from "../../api/playlistApiSlice";
import {
  populatePlaylistArray,
  rearrangePlaylistArray,
  setPlaylist,
} from "../../Redux/playlistSlice.js";
import * as S from "./PlaylistPage.styled.js";
import FlexGrowContainer from "../../components/FlexGrowContainer/FlexGrowContainer";
import SongInPlaylist from "../../components/SongInPlaylist/SongInPlaylist.jsx";
import Animation from "../../components/Animation/Animation.component.jsx";
import { useSearchParams } from "react-router-dom";

function PlaylistPage() {
  const [searchParams] = useSearchParams();
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const listIdQuery = searchParams.get("id");
  const listNameQuery = searchParams.get("name");
  const listLanguageIdQuery = searchParams.get("language");
  const dispatch = useDispatch();

  const shouldFetchPlaylist = currentPlaylistData.playlist.length === 0;

  const { data: playlistQueryData, isSuccess } = useGetPlaylistByIdQuery(
    {
      // id: currentPlaylistData.playlistId,
      // lang: currentPlaylistData.playlistLanguage,
      id: listIdQuery,
      lang: listLanguageIdQuery,
    },
    { skip: !shouldFetchPlaylist }
  );
  useEffect(() => {
    console.log(listIdQuery, listLanguageIdQuery, listNameQuery);
    dispatch(
      setPlaylist({
        playlist: [],
        playlistId: listIdQuery,
        playlistName: listNameQuery,
        playlistLanguage: listLanguageIdQuery,
      })
    );
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(populatePlaylistArray(playlistQueryData));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (currentPlaylistData.currentSongIsPlaying) {
      dispatch(rearrangePlaylistArray());
    }
  }, [currentPlaylistData.currentSong]);

  return (
    <S.PageWrapper>
      <Header />
      {!isSuccess && shouldFetchPlaylist && (
        <Animation
          animationGif={translatingGif}
          animationText={["Loading playlist..."]}
        />
      )}

      <S.PlaylistTitle>{currentPlaylistData.playlistName}</S.PlaylistTitle>
      {(isSuccess || !shouldFetchPlaylist) && (
        <>
          <FlexGrowContainer flexGrow="6" padding="0 0.8rem">
            <S.ContentWrapper>
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
            </S.ContentWrapper>
          </FlexGrowContainer>
        </>
      )}
    </S.PageWrapper>
  );
}

export default PlaylistPage;
