import ImgCard from "../General/ImgCard";
import LanguagesSign from "../LanguagesSign/LanguagesSign";
import FE from "../Layout/FlexElments";

export default function ResultsCard({ img, titles, languages = undefined }) {
  return (
    <FE.CenterRow
      aligned="true"
      style={{
        justifyContent: "space-around",
        width: "85%",
        flexGrow: 1,
        overflowY: "auto",
      }}
    >
      <FE.CenterRow
        aligned="true"
        style={{
          flexGrow: languages ? "1" : 0.1,
          justifyContent: "flex-start",
        }}
      >
        <ImgCard src={img} />
      </FE.CenterRow>
      <FE.CenterCol
        style={{
          flexGrow: "1",
          fontFamily: "ABeeZee",
          fontSize: "0.8rem",
        }}
      >
        {titles && titles.map((title) => <div key={title}>{title}</div>)}
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
