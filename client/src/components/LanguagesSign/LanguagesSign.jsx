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
      <div>
        <img src={leftIcon} />
      </div>
      <img src={arrowImg} />
      <div>
        <img src={rightIcon} />
      </div>
    </div>
  );
}
