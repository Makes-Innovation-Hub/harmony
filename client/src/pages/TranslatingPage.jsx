import translatingGif from "../assets/animations/translating-animation.gif";
import Animation from "../components/Animation/Animation.component";
import Header from "../components/Header/Header";
import Tagline from "../components/Tagline/Tagline.component";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSongDataMutation } from "../api/songDataApiSlice";
import { useEffect } from "react";

const TranslatingPage = () => {
  const selectedData = useLocation().state;
  console.log("selectedData", selectedData);
  const [songDataMutation] = useSongDataMutation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const {_id} = useParams();
  // console.log('_id', _id)
  useEffect(() => {
    songDataMutation(selectedData)
      .then((songData) => {
        console.log("songData", songData);
        console.log("songData", songData.data._id);
        navigate(`/song/${songData?.data._id}`, { state: songData?.data });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [selectedData.song]);

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
