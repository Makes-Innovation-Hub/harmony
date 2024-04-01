import { ContentWrapper, PageWrapper } from "./ArtistPage.styled";
import Header from "../../components/Header/Header";
import ThreeLangNames from "../../components/ThreeLnagNames/ThreeLangNames";
import SongListItem from "../../components/SongListItem/SongListItem";
import { useParams } from "react-router-dom";
import * as S from "./ArtistPage.styled";
import { useGetArtistDataQuery } from "../../api/artistApiSlice";
import Animation from "../../components/Animation/Animation.component";
import translatingGif from "../../assets/animations/translating-animation.gif";
function ArtistPage() {
  const { name } = useParams();
  const { data: artistData, isSuccess } = useGetArtistDataQuery(
    decodeURIComponent(name)
  );
  return (
    <PageWrapper>
      <Header />
      {isSuccess ? (
        <>
          <S.MainContainer>
            <S.FlexGrowthContainer $grow="2" $padding="0 3rem">
              <ThreeLangNames
                fontSize={"23px"}
                gap={"7px"}
                arabicName={artistData.name.arabic}
                hebrewName={artistData.name.hebrew}
                englishName={artistData.name.english}
              />
            </S.FlexGrowthContainer>

            <S.FlexGrowthContainer $grow="12" $padding="0 0.8rem">
              <S.Img
                $background={`url('${artistData.imgURL}') no-repeat center center/cover`}
              ></S.Img>
            </S.FlexGrowthContainer>
          </S.MainContainer>

          <S.FlexGrowthContainer $grow="6" $padding="0 3rem" $marginTop="125px">
            <ContentWrapper>
              {artistData.songs.slice(0, 3).map((song) => (
                <SongListItem
                  key={song.name.english}
                  artist={artistData.name.hebrew}
                  arabicName={song.name.arabic}
                  hebrewName={song.name.hebrew}
                  englishName={song.name.english}
                  imgURL={artistData.imgURL}
                  songId={song._id}
                />
              ))}
            </ContentWrapper>
          </S.FlexGrowthContainer>
        </>
      ) : (
        <Animation
          animationGif={translatingGif}
          animationText={["Loading artist ..."]}
        />
      )}
    </PageWrapper>
  );
}

export default ArtistPage;
