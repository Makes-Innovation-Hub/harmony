import { useEffect, useState } from 'react';
import ImgCard from "../General/ImgCard";
import LanguagesSign from "../LanguagesSign/LanguagesSign";
import FE from "../Layout/FlexElments";
import { useLazyGetArtistDataQuery } from '../../api/artistApiSlice';
import { useNavigate } from 'react-router-dom';

export default function ResultsCard({ imgURL, titles, languages = undefined, type }) {
  const [artistTrigger, artistResults] = useLazyGetArtistDataQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (artistResults && artistResults.status === 'fulfilled') {
      navigate("/Artist", { state: { artistData: artistResults.data } });
    }
  }, [artistResults])

  return (
    <FE.CenterRow
      aligned="true"
      style={{
        margin: "5% auto",
        justifyContent: "space-around",
        width: "70vw",
        flexGrow: 1,
        overflowY: "auto",
      }}
      onClick={() => {
        if (type === 'artist') {
          artistTrigger(titles[0]);
        } else if (type === 'song') {
          console.log('clinging song');
        }
      }}
    >
      <FE.CenterRow
        style={{
          flexGrow: languages ? 1 : 0.1,
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <ImgCard src={imgURL} />
      </FE.CenterRow>
      <FE.CenterCol
        style={{
          flexGrow: 1,
          fontFamily: "ABeeZee",
          fontSize: "0.8rem",
        }}
      >
        {titles && titles.map((title) => {
          return <div key={title}>{title}</div>;
        })}
      </FE.CenterCol>
      <FE.CenterRow style={{ flexGrow: "1" }}>
        {languages && (
          <LanguagesSign
            leftIcon={languages.target}
            rightIcon={languages.origin}
          />
        )}
      </FE.CenterRow>
    </FE.CenterRow>
  );
}
