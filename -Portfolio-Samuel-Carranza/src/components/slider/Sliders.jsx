import Slider from "./Slider";
import { useTranslation } from 'react-i18next';

const Sliders = () => {
  const imgsSlider = ["image1", "image2", "image3", "image4", "image5", "image6"];
  const { t } = useTranslation();
  return (
    <div className="slider-section">
      <h3>{t("titles.featured")}</h3>
      <Slider imgs={imgsSlider} />
    </div>
  );
};

export default Sliders;
