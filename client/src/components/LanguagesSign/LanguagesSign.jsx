import arrowImg from "../../assets/songDetails/Arrow 1.png";
import LetterCircle from "../General/LetterCircle";
import FE from "../Layout/FlexElments";

import heSign from "../../assets/songDetails/ע.png";
import arbSign from "../../assets/songDetails/ع.png";

export default function LanguagesSign({ leftIcon, rightIcon }) {
  return (
    <FE.CenterRow $cursor>
      <LetterCircle>
        <img src={leftIcon === "AR" ? arbSign : heSign} />
      </LetterCircle>
      <img src={arrowImg} />
      <LetterCircle>
        <img src={rightIcon === "AR" ? arbSign : heSign} />
      </LetterCircle>
    </FE.CenterRow>
  );
}
