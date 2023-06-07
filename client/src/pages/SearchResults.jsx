import Songs from "../components/resultDetails/songsResults";
import Artists from "../components/resultDetails/artistDetails";
import Tagline from "../components/Tagline/Tagline.component";
import SearchBar from "../components/SearchBar/SearchBar.component";
import Header from "../components/Header";
import "../components/resultDetails/results.css";

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
          flexGrow: 2,
          display: "flex",
        }}
      >
        <Header />
      </div>
      <div
        id="search"
        style={{
          flexGrow: 1,
          backgroundColor: "blue",
          display: "flex",
        }}
      ></div>
      <div
        id="results"
        style={{
          flexGrow: 5,
          backgroundColor: "yellow",
          display: "flex",
        }}
      ></div>
    </div>
  );
};

export default SearchResults;
