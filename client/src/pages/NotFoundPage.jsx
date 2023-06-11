import notFoundGif from "../assets/animations/not-found-animation.gif";

import Animation from "../components/Animation/Animation.component";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar/SearchBar.component";
import Tagline from "../components/Tagline/Tagline.component";

import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="column-center full-page">
      <Header />
      <Tagline />
      <SearchBar />
      <Animation
        animationGif={notFoundGif}
        animationText={[t("not_found_1"), t("not_found_2")]}
      />
    </div>
  );
};

export default NotFoundPage;
