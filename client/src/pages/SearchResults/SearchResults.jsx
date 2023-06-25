import Tagline from "../../components/Tagline/Tagline.component";
import Header from "../../components/Header/Header";
import HomeSearchBar from "../../components/HomeSerchBar/HomeSearchBar";
import ResultsCard from "../../components/ResultsCard/ResultsCard";
import FE from "../../components/Layout/FlexElments";
import SC from "./SearchRes.style";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const SearchResults = ({ songs, artists }) => {
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
                <SC.Title>Artists</SC.Title>
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
                <SC.Title>Songs</SC.Title>
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
    const searchResults = useSelector((state) => state.searchResults.results);
    const foundSongs = searchResults?.songs;
    const foundArtists = searchResults?.artists;
    const { t } = useTranslation();

    return (
        <FE.Col style={{ height: "100dvh" }}>
            <FE.CenterCol>
                <Header />
                <Tagline />
            </FE.CenterCol>
            <FE.CenterCol style={{ flexGrow: 1 }}>
                <HomeSearchBar />
            </FE.CenterCol>
            <FE.CenterCol style={{ flexGrow: 6 }}>
                ;
                {foundArtists.length > 0 && (
                    <div>
                        <SC.Title>{t("Artists")}</SC.Title>
                        {foundArtists &&
                            foundArtists.map((artist) => {
                                const titles = [];
                                for (const lang in artist.name) {
                                    if (
                                        Object.hasOwnProperty.call(
                                            artist.name,
                                            lang
                                        )
                                    ) {
                                        const langName = artist.name[lang];
                                        titles.push(langName);
                                    }
                                }
                                return (
                                    <ResultsCard
                                        key={artist.id}
                                        imgURL={artist.imgURL}
                                        titles={titles}
                                    />
                                );
                            })}
                    </div>
                )}
                {foundSongs.length > 0 && (
                    <div style={{ width: "100%" }}>
                        <SC.Title>{t("Songs")}</SC.Title>
                        {foundSongs &&
                            foundSongs.map((song) => {
                                const titles = [];
                                for (const lang in song.name) {
                                    if (
                                        Object.hasOwnProperty.call(
                                            song.name,
                                            lang
                                        )
                                    ) {
                                        const langName = song.name[lang];
                                        titles.push(langName);
                                    }
                                }
                                return (
                                    <ResultsCard
                                        key={song.id}
                                        imgURL={song.imgURL}
                                        languages={{
                                            origin: song.originalLang,
                                            target:
                                                song.originalLang === "AR"
                                                    ? "HE"
                                                    : "AR",
                                        }}
                                        titles={titles}
                                    />
                                );
                            })}
                    </div>
                )}
            </FE.CenterCol>
        </FE.Col>
    );
};

export default SearchResults;
