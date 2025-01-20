import Slider from "./Slider";
import { useTranslation } from 'react-i18next';

const Sliders = () => {
  const imgsSlider = ["polaroid1", "polaroid2", "polaroid3"];
  const { t } = useTranslation();
  return (
    <div className="slider-section">
      <h3>{t("titles.featured")}</h3>
      <Slider imgs={imgsSlider} />
    </div>
  );
};

export default Sliders;
