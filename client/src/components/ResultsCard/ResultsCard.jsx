import LanguagesSign from "../LanguagesSign/LanguagesSign";

export default function ResultsCard({ img, titles, languages }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <img src={img} alt="" style={{ borderRadius: "50%" }} />
      <div
        id="titles"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      ></div>
      {languages && (
        <LanguagesSign
          leftIcon={languages.target}
          rightIcon={languages.origin}
        />
      )}
    </div>
  );
}
