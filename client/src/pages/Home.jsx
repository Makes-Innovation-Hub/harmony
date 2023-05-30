import Header from "../components/Header";
import TopSongGallary from "../components/TopSongGallary/TopSongGallary";
import SearchBar from "../components/SearchBar/SearchBar.component";
export default function Home() {
  return (
    <>
      <Header />
      <SearchBar/>
      <TopSongGallary/>
    </>
  );

}
