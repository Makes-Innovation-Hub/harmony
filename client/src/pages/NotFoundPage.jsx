import notFoundGif from "../assets/animations/not-found-animation.gif";

import Animation from "../components/Animation/Animation.component";
import Header from "../components/Header/Header";
import HomeSearchBar from "../components/HomeSerchBar/HomeSearchBar";
import Tagline from "../components/Tagline/Tagline.component";

import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="column-center full-page">
      <Header />
      <Tagline />
      <HomeSearchBar />
      <Animation
        animationGif={notFoundGif}
        animationText={[t("not_found_1"), t("not_found_2")]}
      />
    </div>
  );
};

export default NotFoundPage;
