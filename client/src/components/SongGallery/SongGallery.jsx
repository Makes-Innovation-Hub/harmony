import {
  ImageBoxContainer,
  SongGallary,
  Title,
  TopASongCountainer,
  TopHSongCountainer,
  SectionTitle,
  NoCoverSvg,
  NoCoversContainer,
} from "./SongGalleryStyle.js";
import NoCoversSvg from "../../assets/svgs/no-covers.svg";

import { useTranslation } from "react-i18next";

export default function TopSongGallery({
  smallTitle,
  dataToMap1,
  dataToMap2,
  sectionTitle,
}) {
  const { t } = useTranslation();
  const [title1, title2] = smallTitle;

  return (
    <>
      <SongGallary>
        <SectionTitle>{t(sectionTitle)}</SectionTitle>
        <TopHSongCountainer>
          <Title>{t(title1)}</Title>

          {dataToMap1?.length === 0 && (
            <NoCoversContainer>
              <NoCoverSvg src={NoCoversSvg} alt="No Covers Svg" />
            </NoCoversContainer>
          )}

          <ImageBoxContainer>{dataToMap1}</ImageBoxContainer>
        </TopHSongCountainer>

        <TopASongCountainer>
          <Title>{t(title2)}</Title>
          {dataToMap2?.length === 0 && (
            <NoCoversContainer>
              <NoCoverSvg src={NoCoversSvg} alt="No Covers Svg" />
            </NoCoversContainer>
          )}
          <ImageBoxContainer>{dataToMap2}</ImageBoxContainer>
        </TopASongCountainer>
      </SongGallary>
    </>
  );
}
