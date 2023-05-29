import ContentWrapper from "./ArtistPage.styled";
import FlexGrowContainer from "../../components/FlexGrowContainer/FlexGrowContainer";
import Header from "../../components/Header";
import ThreeLangNames from "../../components/ThreeLnagNames/ThreeLangNames";
import SongListItem from "../../components/SongListItem/SongListItem";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import ClipArtImage from "../../components/ClipArtImage/ClipArtImage";

const dummyData = {
  artist: {
    name: {
      hebrew: "טונה",
      english: "Tuna",
      arabic: "تونة",
    },
    imgURL:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%D7%90%D7%99%D7%AA%D7%99_%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F_%D7%98%D7%95%D7%A0%D7%94.jpg/1599px-%D7%90%D7%99%D7%AA%D7%99_%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F_%D7%98%D7%95%D7%A0%D7%94.jpg",
  },
  songsArray: [
    {
      name: {
        hebrew: "1טונה",
        english: "Tuna",
        arabic: "تونة",
      },
      imgURL:
        "https://mafish.org.il/wp-content/uploads/2019/12/%D7%98%D7%95%D7%A0%D7%94-%D7%9B%D7%97%D7%95%D7%9C%D7%AA-%D7%A1%D7%A0%D7%A4%D7%99%D7%A8-scaled.jpg",
    },
    {
      name: {
        hebrew: "2טונה",
        english: "Tuna",
        arabic: "تونة",
      },
      imgURL:
        "https://mafish.org.il/wp-content/uploads/2019/12/%D7%98%D7%95%D7%A0%D7%94-%D7%9B%D7%97%D7%95%D7%9C%D7%AA-%D7%A1%D7%A0%D7%A4%D7%99%D7%A8-scaled.jpg",
    },
    {
      name: {
        hebrew: "3טונה",
        english: "Tuna",
        arabic: "تونة",
      },
      imgURL:
        "https://mafish.org.il/wp-content/uploads/2019/12/%D7%98%D7%95%D7%A0%D7%94-%D7%9B%D7%97%D7%95%D7%9C%D7%AA-%D7%A1%D7%A0%D7%A4%D7%99%D7%A8-scaled.jpg",
    },
  ],
};

function ArtistPage() {
  return (
    <PageWrapper
      padding={".5rem"}
      justifyContent="flex-start"
      minHeight="100vh"
    >
      <FlexGrowContainer flexGrow="1">
        <Header />
      </FlexGrowContainer>
      <FlexGrowContainer flexGrow="2">
        <ThreeLangNames
          arabicName={dummyData.artist.name.arabic}
          hebrewName={dummyData.artist.name.hebrew}
          englishName={dummyData.artist.name.english}
          fontSize='1.15rem'
          lineHeight='133%'
        />
      </FlexGrowContainer>

      <FlexGrowContainer flexGrow="800">
        <ClipArtImage
          width="100%"
          height="100%"
          border="1px solid"
          minHeight='14rem'
          imgURL={dummyData.artist.imgURL}
        />
      </FlexGrowContainer>

      <FlexGrowContainer flexGrow="6">
          <ContentWrapper>
            {dummyData.songsArray.map((song) => (
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
