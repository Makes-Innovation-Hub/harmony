import Wrapped from './NotFoundAnimation.styled'

import notFoundAnimation from '../../assets/animations/not-found-animation.gif'

const NotFoundAnimation = () => {
    return (
        <Wrapped>
            <img
                src={notFoundAnimation}
                alt="not found gif"
                className="not-found-animation"
            />
            <h2 className="not-found-text">
                No Results, Please search another Song or Artist
            </h2>
        </Wrapped>
    )
}

export default NotFoundAnimation
