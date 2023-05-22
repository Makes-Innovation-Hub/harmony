import Wrapped from './Animation.styled'

const Animation = ({ animationGif, animationText }) => {
    return (
        <Wrapped>
            <img src={animationGif} alt="animation" className="animation" />
            {animationText.map((text) => (
                <h2 className="animation-text" key={text}>
                    {text}
                </h2>
            ))}
        </Wrapped>
    )
}

export default Animation
