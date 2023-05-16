import translatingGif from '../assets/animations/translating-animation.gif'
import Animation from '../components/Animation/Animation.component'

const TranslatingPage = () => {
    return (
        <div>
            {' '}
            <Animation
                animationGif={translatingGif}
                animationText="Translating Lyrics..."
            />
        </div>
    )
}

export default TranslatingPage
