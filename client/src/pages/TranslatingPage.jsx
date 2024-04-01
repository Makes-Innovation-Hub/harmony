import translatingGif from "../assets/animations/translating-animation.gif";
import Animation from "../components/Animation/Animation.component";
import Header from "../components/Header/Header";
import Tagline from "../components/Tagline/Tagline.component";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSongDataMutation } from "../api/songDataApiSlice";
import { useEffect } from "react";

const TranslatingPage = () => {
  const selectedData = useLocation().state;
  const [songDataMutation, { isSuccess, data }] = useSongDataMutation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    songDataMutation(selectedData);
  }, []);
  useEffect(() => {
    if (isSuccess) {
      navigate(`/song/${data._id}`);
    }
  }, [isSuccess]);

  return (
    <div className="column-center full-page" style={{}}>
      <Header />
      <Tagline />
      <Animation
        animationGif={translatingGif}
        animationText={[t("translating")]}
      />
    </div>
  );
};

export default TranslatingPage;
