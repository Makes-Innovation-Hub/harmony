import Tagline from "../../components/Tagline/Tagline.component";
import Header from "../../components/Header";
import HomeSearchBar from "../../components/HomeSerchBar/HomeSearchBar";
import ResultsCard from "../../components/ResultsCard/ResultsCard";
import FE from "../../components/Layout/FlexElments";
import SC from "./SearchRes.style";
import { useTranslation } from "react-i18next";
const SearchResults = ({ songs, artists }) => {
  const { t } = useTranslation();
  return (
    <FE.Col style={{ height: "100dvh" }}>
      <FE.CenterCol>
        <Header />
        <Tagline />
      </FE.CenterCol>
      <FE.CenterCol style={{ flexGrow: 0.5 }}>
        <HomeSearchBar />
      </FE.CenterCol>
      <FE.CenterCol style={{ flexGrow: 6 }}>
        <SC.Title>{t("Artists")}</SC.Title>

        {artists &&
          artists.map((artist) => {
            return (
              <ResultsCard
                key={artist.id}
                img={artist.img}
                titles={artist.titles}
              />
            );
          })}
        <SC.Title>{t("Songs")}</SC.Title>
        {songs &&
          songs.map((song) => {
            return (
              <ResultsCard
                key={song.id}
                img={song.img}
                languages={{
                  target: song.languages.target,
                  origin: song.languages.origin,
                }}
                titles={song.titles}
              />
            );
          })}
      </FE.CenterCol>
    </FE.Col>
  );
};

export default SearchResults;
