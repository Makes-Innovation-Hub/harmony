import Songs from "../components/resultDetails/songsResults";
import Artists from "../components/resultDetails/artistDetails";
import Tagline from "../components/Tagline/Tagline.component";
import SearchBar from "../components/SearchBar/SearchBar.component";
import Header from "../components/Header";
import "../components/resultDetails/results.css";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";

const SearchResults = () => {
  return (
    <div
      style={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        id="header"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Header />
        <Tagline />
      </div>
      <div
        id="search"
        style={{
          flexGrow: 0.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HomeSearchBar />
      </div>
      <div
        id="results"
        style={{
          flexGrow: 6,
          backgroundColor: "yellow",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
};

export default SearchResults;
