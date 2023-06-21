import Wrapped from "./Tagline.styled";

import { useTranslation } from "react-i18next";

const Tagline = () => {
  const { t } = useTranslation();
  return (
    <Wrapped>
      <p>
        {t("tagline_1")} <br /> {t("tagline_2")}
      </p>
    </Wrapped>
  );
};

export default Tagline;
