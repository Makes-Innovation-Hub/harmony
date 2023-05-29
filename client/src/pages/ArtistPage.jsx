import ClipArtImage from "../components/ClipArtImage/ClipArtImage"
import Header from "../components/Header"
import ThreeLangNames from "../components/ThreeLnagNames/ThreeLangNames"

function ArtistPage() {
  return (
  <>
  <Header/>
  <ThreeLangNames arabicName='تونة' hebrewName='טונה' englishName='Tuna'/>
  <ClipArtImage width='5rem' height='5rem' imgURL='https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/%D7%90%D7%99%D7%AA%D7%99_%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F_%D7%98%D7%95%D7%A0%D7%94.jpg/1599px-%D7%90%D7%99%D7%AA%D7%99_%D7%96%D7%91%D7%95%D7%9C%D7%95%D7%9F_%D7%98%D7%95%D7%A0%D7%94.jpg' />

  </>
  )
}

export default ArtistPage
