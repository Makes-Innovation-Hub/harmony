import translatingGif from "../assets/animations/translating-animation.gif";
import Animation from "../components/Animation/Animation.component";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar/SearchBar.component";
import Tagline from "../components/Tagline/Tagline.component";

import { useTranslation } from "react-i18next";

const TranslatingPage = () => {
    const { t } = useTranslation();
    return (
        <div className="column-center full-page">
            <Header />
            <Tagline />
            <SearchBar />
            <Animation
                animationGif={translatingGif}
                animationText={[t("translating")]}
            />
        </div>
    );
};

export default TranslatingPage;
