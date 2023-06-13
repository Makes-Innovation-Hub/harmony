import Header from "../components/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import Tagline from "../components/Tagline/Tagline.component";
import TopSongGallary from "../components/TopSongGallary/TopSongGallary";

export default function Home() {
  return (
    <>
      <Header />
      <Tagline />
      <HomeSearchBar />
      <TopSongGallary />
    </>
  );
}
