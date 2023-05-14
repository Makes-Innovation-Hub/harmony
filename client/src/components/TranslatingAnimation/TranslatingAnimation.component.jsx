import Wrapped from './TranslationAnimation.styled'

import translatingAnimation from '../../assets/animations/translating-animation.gif'

const TranslatingAnimation = () => {
    return (
        <Wrapped>
            <img
                src={translatingAnimation}
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
