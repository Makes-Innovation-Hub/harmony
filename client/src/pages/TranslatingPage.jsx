import { useSelector } from 'react-redux';
import translatingGif from "../assets/animations/translating-animation.gif";
import Animation from "../components/Animation/Animation.component";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar.component";
import Tagline from "../components/Tagline/Tagline.component";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSongDataMutation } from '../api/songDataApiSlice';
import { useEffect } from 'react';

const TranslatingPage = () => {
  const selectedData = useLocation().state;
  const [songDataMutation] = useSongDataMutation()
  const navigate = useNavigate()
  const { t } = useTranslation();
  useEffect(() => {
    songDataMutation(selectedData)
      .then(songData => {
        navigate('/song', { state: songData.data })
      })
      .catch(err => {
        console.log('err', err);

      });
  }, [])

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
