import Slider from "./Slider";

const Sliders = () => {
  const imgsSlider = ["polaroid1", "polaroid2", "polaroid3"];

  return (
    <div>
      <Slider imgs={imgsSlider} />
    </div>
  );
};

export default Sliders;
