import ClipArtImage from "../components/ClipArtImage/ClipArtImage"
import ContentWrapper from "../components/ContentWrapper/ContentWrapper"
import FlexGrowContainer from "../components/FlexGrowContainer/FlexGrowContainer"
import Header from "../components/Header"
import ThreeLangNames from "../components/ThreeLnagNames/ThreeLangNames"

function ArtistPage() {
  return (
  <ContentWrapper padding={'.5rem'} justifyContent='flex-start'>
  <FlexGrowContainer flexGrow='1'>
    <Header/>
  </FlexGrowContainer>
    <FlexGrowContainer flexGrow='2'>
      <ThreeLangNames arabicName='تونة' hebrewName='טונה' englishName='Tuna'/>
    </FlexGrowContainer>

    <FlexGrowContainer flexGrow='90'>
      <ClipArtImage width='100' height='100%' border='1px solid black' imgURL='https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%D7%90%D7%99%D7%AA%D7%99_%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F_%D7%98%D7%95%D7%A0%D7%94.jpg/1599px-%D7%90%D7%99%D7%AA%D7%99_%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F_%D7%98%D7%95%D7%A0%D7%94.jpg' />
    </FlexGrowContainer>

    <FlexGrowContainer flexGrow='60'></FlexGrowContainer>
  </ContentWrapper>
  )
}

export default ArtistPage
