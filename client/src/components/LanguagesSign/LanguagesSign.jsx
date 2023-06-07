import { Button, TranslationDiv } from "../resultDetails/songsResults.styled";
import arrowImg from "../../assets/songDetails/Arrow 1.png";

export default function LanguagesSign({ leftIcon, rightIcon }) {
  return (
    <div>
      <TranslationDiv>
        <Button className="btn">
          <img src={leftIcon} />
        </Button>
        <img src={arrowImg} alt="Arrow" />
        <Button className="btn">
          <img src={rightIcon} alt="Hebrew" />
        </Button>
      </TranslationDiv>
    </div>
  );
}
