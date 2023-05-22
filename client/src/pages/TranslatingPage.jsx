import translatingGif from '../assets/animations/translating-animation.gif'
import Animation from '../components/Animation/Animation.component'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar/SearchBar.component'
import Tagline from '../components/Tagline/Tagline.component'

const animationText = ['Translating Lyrics...']

const TranslatingPage = () => {
    return (
        <div className="column-center full-page">
            <Header />
            <Tagline />
            <SearchBar />
            <Animation
                animationGif={translatingGif}
                animationText={animationText}
            />
        </div>
    )
}

export default TranslatingPage
