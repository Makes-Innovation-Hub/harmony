import ContentWrapper from "../ContentWrapper/ContentWrapper";
import arabicImg from "../../assets/songDetails/ع.png";
import hebrewImg from "../../assets/songDetails/ע.png";
import arrowImg from "../../assets/songDetails/Arrow 1.png";
import Button from "./TranslationSymbolsGroup.style";

function TranslationSymbolsGroup() {
  return (
    <ContentWrapper flexDirection="row" justifyContent="center">
      <Button className="btn">
        <img src={arabicImg} />
      </Button>
      <img src={arrowImg} />
      <Button className="btn">
        <img src={hebrewImg} />
      </Button>
    </ContentWrapper>
  );
}

export default TranslationSymbolsGroup;
