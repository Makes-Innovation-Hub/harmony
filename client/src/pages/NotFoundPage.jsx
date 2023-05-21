import notFoundGif from '../assets/animations/not-found-animation.gif'

import Animation from '../components/Animation/Animation.component'
import Header from '../components/Header'

const NotFoundPage = () => {
    return (
        <div className="column-center full-page">
            <Animation
                animationGif={notFoundGif}
                animationText="No Results, Please search another Song or Artist"
            />
        </div>
    )
}

export default NotFoundPage
