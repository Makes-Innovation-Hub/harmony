import { ContentWrapper, PageWrapper } from "./ArtistPage.styled";
import FlexGrowContainer from "../../components/FlexGrowContainer/FlexGrowContainer";
import Header from "../../components/Header";
import ThreeLangNames from "../../components/ThreeLnagNames/ThreeLangNames";
import SongListItem from "../../components/SongListItem/SongListItem";
import ClipArtImage from "../../components/ClipArtImage/ClipArtImage";

function ArtistPage({ artistData }) {
  return (
    <PageWrapper>
      <FlexGrowContainer flexGrow="1">
        <Header />
      </FlexGrowContainer>
      <FlexGrowContainer flexGrow="2" padding="0 0.8rem">
        <ThreeLangNames
          arabicName={artistData.name.arabic}
          hebrewName={artistData.name.hebrew}
          englishName={artistData.name.english}
          artistEnglishName={artistData.name.english}
          fontSize="1.15rem"
          lineHeight="133%"
        />
      </FlexGrowContainer>

      <FlexGrowContainer flexGrow="12" padding="0 0.8rem">
        <ClipArtImage
          width="100%"
          height="100%"
          border="1px solid"
          minHeight="14rem"
          imgURL={artistData.imgURL}
        />
      </FlexGrowContainer>

      <FlexGrowContainer flexGrow="6" padding="0 0.8rem">
        <ContentWrapper>
          {artistData.songs.slice(0, 3).map((song) => (
            <SongListItem
              key={song.name.english}
              arabicName={song.name.arabic}
              hebrewName={song.name.hebrew}
              englishName={song.name.english}
              imgURL={song.imgURL}
            />
          ))}
        </ContentWrapper>
      </FlexGrowContainer>
    </PageWrapper>
  );
}

export default ArtistPage;
