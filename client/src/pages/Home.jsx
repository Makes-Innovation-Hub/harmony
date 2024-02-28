import Header from "../components/Header/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import Tagline from "../components/Tagline/Tagline.component";
import TopSongGallary from "../components/TopSongGallary/TopSongGallary";
import TopPlaylist from "../components/topPlaylist/topPlaylist";

export default function Home() {
  return (
    <>
      <Header />
      <Tagline />
      <HomeSearchBar />
      <TopSongGallary />
      <TopPlaylist />
    </>
  );
}
