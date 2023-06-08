import arrowImg from "../../assets/songDetails/Arrow 1.png";
import LetterCircle from "../General/LetterCircle";
import FE from "../Layout/FlexElments";

export default function LanguagesSign({ leftIcon, rightIcon }) {
  return (
    <FE.CenterRow>
      <LetterCircle>
        <img src={leftIcon} />
      </LetterCircle>
      <img src={arrowImg} />
      <LetterCircle>
        <img src={rightIcon} />
      </LetterCircle>
    </FE.CenterRow>
  );
}
