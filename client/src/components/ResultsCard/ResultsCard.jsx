import LanguagesSign from "../LanguagesSign/LanguagesSign";

export default function ResultsCard({ img, titles, languages = undefined }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "red",
        width: "100%",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          flexGrow: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
        }}
      >
        <img src={img} alt="" style={{ borderRadius: "50%" }} />
      </div>
      <div
        id="titles"
        style={{
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "purple",
        }}
      >
        {titles && titles.map((title) => <div key={title}>{title}</div>)}
      </div>
      <div
        style={{
          flexGrow: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
        }}
      >
        {languages && (
          <LanguagesSign
            leftIcon={languages.target}
            rightIcon={languages.origin}
          />
        )}
      </div>
    </div>
  );
}
