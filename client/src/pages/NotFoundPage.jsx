import notFoundGif from '../assets/animations/not-found-animation.gif'

import Animation from '../components/Animation/Animation.component'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar/SearchBar.component'
import Tagline from '../components/Tagline/Tagline.component'

const animationText = ['No Results, Please search', 'another Song or Artist']

const NotFoundPage = () => {
    return (
        <div className="column-center full-page">
            <Header />
            <Tagline />
            <SearchBar />
            <Animation
                animationGif={notFoundGif}
                animationText={animationText}
            />
        </div>
    )
}

export default NotFoundPage
