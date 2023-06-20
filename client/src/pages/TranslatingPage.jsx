import { useSelector } from 'react-redux';
import translatingGif from "../assets/animations/translating-animation.gif";
import Animation from "../components/Animation/Animation.component";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar.component";
import Tagline from "../components/Tagline/Tagline.component";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSongDataMutation } from '../api/songDataApiSlice';
import { useEffect } from 'react';

const TranslatingPage = () => {
  const selectedData = useLocation().state;
  console.log('selectedData', selectedData);
  const [songDataMutation] = useSongDataMutation()
  const { t } = useTranslation();
  useEffect(() => {
    songDataMutation(selectedData)
      .then(songData => {
        console.log('songData', songData);
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
