import notFoundGif from '../assets/animations/not-found-animation.gif'

import Animation from '../components/Animation/Animation.component'

const NotFoundPage = () => {
    return (
        <div>
            <Animation
                animationGif={notFoundGif}
                animationText="No Results, Please search another Song or Artist"
            />
        </div>
    )
}

export default NotFoundPage
