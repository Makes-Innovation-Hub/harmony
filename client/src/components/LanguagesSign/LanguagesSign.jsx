import { Button, TranslationDiv } from "../resultDetails/songsResults.styled";
import arrowImg from "../../assets/songDetails/Arrow 1.png";

export default function LanguagesSign({ leftIcon, rightIcon }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#D9D9D9",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={leftIcon} />
      </div>
      <img src={arrowImg} />
      <div
        style={{
          background: "#D9D9D9",
          width: "2rem",
          height: "2rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={rightIcon} />
      </div>
    </div>
  );
}
