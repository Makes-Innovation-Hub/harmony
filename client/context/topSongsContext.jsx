import { useState, createContext, useContext } from "react";
const TopSongsContext = createContext();

const TopSongsContextProvider = ({ children }) => {
  const [songLyrics, setSongLyrics] = useState("");
  const [songDetails, setSongDetails] = useState({
    songName: "",
    artistName: "",
    coverArt: "",
  });

  return (
    <TopSongsContext.Provider
      value={{
        songLyrics,
        setSongLyrics,
        songDetails,
        setSongDetails,
      }}
    >
      {children}
    </TopSongsContext.Provider>
  );
};

export const useTopSongsGlobalContext = () => {
  return useContext(TopSongsContext);
};

export { TopSongsContextProvider };
