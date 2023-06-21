import {
  LyricsSection,
  LyricsWrapper,
  TranslationWrapper,
  SongTitle,
  Status,
  Paragraph,
  TranslatedParagraph,
} from "./LyricsStyles";
import "../Header/Header.css";

const Lyrics = ({ artist, title, lyrics }) => {
  return (
    <LyricsSection>
      <TranslationWrapper>
        <Status>Translation</Status>
        <SongTitle>מול עיני</SongTitle>
        <TranslatedParagraph>
          יש בינינו פגישה, גם אם אנחנו רחוקים בטוח שאחזור גם אם ביני ובינו יש
          ארצות מול עיני בכל מקום.
        </TranslatedParagraph>
        <TranslatedParagraph>
          ופעם הבאה בטח ניפגש אני ממש וכולי אהבתינו ולא אמכור בחיים לאף אחד, מול
          עיני.
        </TranslatedParagraph>
        <TranslatedParagraph>
          ואני לא יכול עם הימים ואין מילים לתאר את זה והלילה שלי מתארך וכשאני
          נרדם, מול עיני. מול עיני בכל מקום.
        </TranslatedParagraph>
        <TranslatedParagraph>
          ביום שניפגש, בינינו הבטחות וגם בחסרונה עדיין התקווה נמצאת מול עיני,
          בכל מקום
        </TranslatedParagraph>
      </TranslationWrapper>
      <LyricsWrapper>
        <Status>Original</Status>
        <SongTitle>قصاد عینی</SongTitle>
        <Paragraph>
          و بینا معاد، لو احنا بعاد أکید راجع و لو بینی و بینه بلاد قصاد عینی،
          فی کل مکان
        </Paragraph>
        <Paragraph>
          و من تانی أکید راجعین أنا دایب و کللی حنین و لا عمری أبیع لو مین قصاد
          عینی
        </Paragraph>
        <Paragraph>
          و مش قادر على الأیام و لا یوصف هوایا کلام و طول لیلی و لما بنام، قصاد
          عینی قصاد عینی، فی کل مکان
        </Paragraph>
        <Paragraph>
          فی یوم هنعود، ده بیننا وعود و فی غیابه أکید لسه الأمل موجود قصاد عینی،
          فی کل مکان
        </Paragraph>
      </LyricsWrapper>
    </LyricsSection>
  );
};

export default Lyrics;
