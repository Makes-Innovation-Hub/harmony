import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { useGetPlaylistByIdQuery } from "../../api/playlistApiSlice";
import { ContentWrapper, PageWrapper } from "./PlaylistPage.styled.js";
import FlexGrowContainer from "../../components/FlexGrowContainer/FlexGrowContainer";
import SongInPlaylist from "../../components/SongInPlaylist/SongInPlaylist.jsx";

function PlaylistPage() {
  const currentPlaylistData = useSelector((state) => state.currentplaylist);
  const { data: playlistQueryData, isSuccess } = useGetPlaylistByIdQuery({
    id: currentPlaylistData.playlistId,
    lang: currentPlaylistData.playlistLanguage,
  });
  useEffect(() => {
    console.log(currentPlaylistData);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      console.log("playlistQueryData");
      console.log(playlistQueryData);
    }
  }, [isSuccess]);
  return (
    // <>
    //   <Header />
    //   <h3>{currentPlaylistData.playlistName}</h3>
    //   {isSuccess && (
    //     <div>
    //       {playlistQueryData.map((song, index) => {
    //         return (
    //           <div key={index}>
    //             <h3>{song.songName3Lang.english}</h3>
    //             <h3>{song.songName3Lang.arabic}</h3>
    //             <h3>{song.songName3Lang.hebrew}</h3>
    //             <ImgCard src={song.thumbnailUrl} />
    //             {/* <ImgCard src={song.profilePicUrl} /> */}

    //           </div>
    //         );
    //       })}
    //     </div>
    //   )}
    // </>
    <PageWrapper>
      <FlexGrowContainer flexGrow="1">
        <Header />
      </FlexGrowContainer>
      <FlexGrowContainer flexGrow="2" padding="0 0.8rem">
        <h3>{currentPlaylistData.playlistName}</h3>
      </FlexGrowContainer>

      {isSuccess && (
        <FlexGrowContainer flexGrow="6" padding="0 0.8rem">
          <ContentWrapper>
            {playlistQueryData.map((song, index) => (
              <SongInPlaylist
                key={index}
                artist={"artistData.name.hebrew"}
                arabicName={song.songName3Lang.arabic}
                hebrewName={song.songName3Lang.hebrew}
                englishName={song.songName3Lang.english}
                imgURL={song.thumbnailUrl}
              />
            ))}
          </ContentWrapper>
        </FlexGrowContainer>
      )}
    </PageWrapper>
  );
}

export default PlaylistPage;
