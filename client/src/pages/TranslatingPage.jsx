import translatingGif from '../assets/animations/translating-animation.gif'
import Animation from '../components/Animation/Animation.component'
import Header from '../components/Header'

const TranslatingPage = () => {
    return (
        <div className="column-center full-page">
            <Header />
            <Animation
                animationGif={translatingGif}
                animationText="Translating Lyrics..."
            />
        </div>
    )
}

export default TranslatingPage
