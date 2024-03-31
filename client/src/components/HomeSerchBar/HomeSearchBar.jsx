import { useState } from "react";
import { useDispatch } from "react-redux";
import { setResults } from "../../Redux/searchResultsSlice";
import Wrapped, { InputContainer } from "./HomeSearchBarStyle.js";
import { useSearchMutation } from "../../api/searchsliceApi.js";
import { useNavigate, useLocation } from "react-router-dom";
import searchSvg from "../../assets/svgs/svgSearch.svg";

const HomeSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchMutation] = useSearchMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const inputHandler = (e) => {
    setSearchTerm(e.target.value.trim());
  };

  const sendSearchRequest = async () => {
    if (!searchTerm) {
      navigate("/not-found");
      setErrorMessage("Please insert text in English, Hebrew, or Arabic");
      return;
    }
    try {
      const results = await searchMutation(searchTerm);
      if (
        results.data.artists.length === 0 &&
        results.data.songs.length === 0
      ) {
        navigate("/not-found");
      } else {
        dispatch(setResults(results.data));
        setErrorMessage("");
        navigate(`/results?searchTerm=${searchTerm}`);
      }
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  return (
    <InputContainer>
      <Wrapped>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            onChange={(e) => inputHandler(e)}
            placeholder={
              pathname === "/not-found"
                ? "No results found"
                : "Search a Song or Artist"
            }
          />
          <button className="search-button" onClick={sendSearchRequest}>
            <img src={searchSvg} alt="search svg" />
          </button>
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </Wrapped>
    </InputContainer>
  );
};

export default HomeSearchBar;
