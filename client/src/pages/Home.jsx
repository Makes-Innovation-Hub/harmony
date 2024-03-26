import Header from "../components/Header/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import Tagline from "../components/Tagline/Tagline.component";
import TopSongGallary from "../components/TopSongGallary/TopSongGallary";
import TopPlaylist from "../components/topPlaylist/topPlaylist";
import * as S from "./NotFoundPageStyles.js";
export default function Home() {
  return (
    <>
      <Header />
      <S.SeatchContainer>
        <Tagline />
        <HomeSearchBar />
      </S.SeatchContainer>
      <TopSongGallary />
      <TopPlaylist />
    </>
  );
}
