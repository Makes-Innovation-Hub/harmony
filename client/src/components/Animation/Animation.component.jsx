import Wrapped from "./Animation.styled";

const Animation = ({ animationGif, animationText }) => {
  return (
    <Wrapped>
      <img src={animationGif} alt="animation" className="animation" />
      {animationText.map((text) => (
        <div className="animation-text" key={text}>
          {text}
        </div>
      ))}
    </Wrapped>
  );
};

export default Animation;
