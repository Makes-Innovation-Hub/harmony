import Wrapped from './Animation.styled'

const Animation = ({ animationGif, animationText }) => {
    return (
        <Wrapped>
            <img src={animationGif} alt="animation" className="animation" />
            <h2 className="animation-text">{animationText}</h2>
        </Wrapped>
    )
}

export default Animation
