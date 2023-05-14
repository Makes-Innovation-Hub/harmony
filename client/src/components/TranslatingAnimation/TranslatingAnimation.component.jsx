import Wrapped from './TranslationAnimation.styled'

import animation from '../../assets/translating-animation.gif'

const TranslatingAnimation = () => {
    return (
        <Wrapped>
            <img
                src={animation}
                alt="translating-gif"
                className="translating-animation"
            />
            <h2 className="translating-animation-text">
                Translating lyrics...
            </h2>
        </Wrapped>
    )
}

export default TranslatingAnimation
