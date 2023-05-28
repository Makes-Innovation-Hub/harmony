import Header from "../components/Header";
import TopSongGallary from "../components/TopSongGallary/TopSongGallary";
import Search from "../components/Searchbar"
export default function Home() {
  return (
    <>
      <Header />
      <Search/>
      <TopSongGallary/>
    </>
  );

}
