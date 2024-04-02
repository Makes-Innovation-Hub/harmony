import Tagline from "../../components/Tagline/Tagline.component";
import Header from "../../components/Header/Header";
import HomeSearchBar from "../../components/HomeSerchBar/HomeSearchBar";
import ResultsCard from "../../components/ResultsCard/ResultsCard";
import FE from "../../components/Layout/FlexElments";
import * as S from "./SearchRes.style";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSearchMutation } from "../../api/searchsliceApi";
import { setResults } from "../../Redux/searchResultsSlice";

const SearchResultsPage = ({ songs, artists }) => {
  const dispatch = useDispatch();
  const [searchMutation] = useSearchMutation();

  const searchResults = useSelector((state) => state.searchResults.results);
  const foundSongs = searchResults?.songs;
  const foundArtists = searchResults?.artists;
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const { t } = useTranslation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!(foundArtists && foundSongs)) {
      const sendSearchRequest = async () => {
        if (!searchTerm) {
          navigate("/not-found");
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
          }
        } catch (error) {
          console.error("Search error:", error);
        }
      };
      sendSearchRequest();
    }
  }, []);

  return (
    <FE.Col>
      <FE.CenterCol>
        <Header />
        <Tagline />
      </FE.CenterCol>
      <FE.CenterCol>
        <HomeSearchBar />
      </FE.CenterCol>
      <FE.CenterCol>
        {foundArtists?.length > 0 && (
          <S.ResultsContainer>
            <S.Title>{t("Artists")}</S.Title>
            {foundArtists &&
              foundArtists?.map((artist) => {
                const titles = [];
                for (const lang in artist.name) {
                  if (Object.hasOwnProperty.call(artist.name, lang)) {
                    const langName = artist.name[lang];
                    titles.push(langName);
                  }
                }
                return (
                  <ResultsCard
                    type="artist"
                    key={artist.id}
                    imgURL={artist.imgURL}
                    titles={titles}
                  />
                );
              })}
          </S.ResultsContainer>
        )}
        {foundSongs?.length > 0 && (
          <S.ResultsContainer>
            <S.Title>{t("Songs")}</S.Title>
            {foundSongs &&
              foundSongs?.map((song) => {
                const titles = [];
                for (const lang in song.name) {
                  if (Object.hasOwnProperty.call(song.name, lang)) {
                    const langName = song.name[lang];
                    titles.push(langName);
                  }
                }
                return (
                  <ResultsCard
                    type="song"
                    key={song.id}
                    imgURL={song.imgURL}
                    languages={{
                      origin: song.originalLang === "arabic" ? "AR" : "HE",
                      target: song.originalLang === "arabic" ? "HE" : "AR",
                    }}
                    titles={titles}
                    artistData={song}
                  />
                );
              })}
          </S.ResultsContainer>
        )}
      </FE.CenterCol>
    </FE.Col>
  );
};

export default SearchResultsPage;
