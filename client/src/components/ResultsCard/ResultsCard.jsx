import { useEffect, useState } from "react";
import ImgCard from "../General/ImgCard";
import LanguagesSign from "../LanguagesSign/LanguagesSign";
import FE from "../Layout/FlexElments";
import { useLazyGetArtistDataQuery } from "../../api/artistApiSlice";
import { useNavigate } from "react-router-dom";

export default function ResultsCard({
  imgURL,
  titles,
  languages = undefined,
  type,
  artistData = undefined,
}) {
  const [artistTrigger, artistResults] = useLazyGetArtistDataQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (artistResults && artistResults.status === "fulfilled") {
      const encodedArtist = encodeURIComponent(artistResults.data.name.english);
      navigate(`/Artist/${encodedArtist}`, {
        state: { artistData: artistResults.data },
      });
    }
  }, [artistResults]);

  return (
    <FE.CenterRow
      aligned="true"
      style={{
        margin: "5% auto",
        justifyContent: "space-around",
        width: "100%",
        flexGrow: 1,
        overflowY: "auto",
      }}
      onClick={() => {
        if (type === "artist") {
          artistTrigger(titles[0]);
        } else if (type === "song" && artistData) {
          navigate(`/song/${artistData.id}`);
        }
      }}
    >
      <FE.CenterRow
        style={{
          flexGrow: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          maxWidth: "33%",
        }}
      >
        <ImgCard src={imgURL} />
      </FE.CenterRow>

      <FE.CenterCol
        style={{
          flexGrow: 2,
          fontFamily: "ABeeZee",
          fontSize: "13px",
          maxWidth: "34%",
        }}
      >
        {titles.map((title, index) => (
          <div
            key={title + index}
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            {title}
          </div>
        ))}
      </FE.CenterCol>

      {languages ? (
        <FE.CenterRow
          style={{ flexGrow: 1, justifyContent: "flex-end", maxWidth: "33%" }}
        >
          <LanguagesSign
            leftIcon={languages.target}
            rightIcon={languages.origin}
          />
        </FE.CenterRow>
      ) : (
        <div style={{ flexGrow: 1, maxWidth: "33%" }}></div>
      )}
    </FE.CenterRow>
  );
}
