import Tagline from "../components/Tagline/Tagline.component";
import Header from "../components/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import ResultsCard from "../components/ResultsCard/ResultsCard";

const SearchResults = ({ songs, artists }) => {
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
      >
        <h3>Artist</h3>
        {artists &&
          artists.map((artist) => {
            return (
              <ResultsCard
                key={artist.id}
                img={artist.img}
                languages={{ target: "ar", origin: "he" }}
                titles={artists.name}
              />
            );
          })}
        <h3>Songs</h3>
        {songs &&
          songs.map((song) => {
            return (
              <ResultsCard
                key={song.id}
                img={song.img}
                languages={{ target: "ar", origin: "he" }}
                titles={song.name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SearchResults;
