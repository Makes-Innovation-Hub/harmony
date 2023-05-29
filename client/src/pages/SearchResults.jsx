import Songs from "../components/resultDetails/songsResults";
import Artists from "../components/resultDetails/artistDetails";
import Tagline from '../components/Tagline/Tagline.component'
import SearchBar from '../components/SearchBar/SearchBar.component'
import Header from "../components/Header";
import '../components/resultDetails/results.css'

const SearchResults = () =>{
    return(
        <>
        <Header />
        <div className="tagline">
        <Tagline />
        </div>
        <SearchBar />
        <h1 className="nameHeader">Artists</h1>
        <Artists />
        <Artists />
        <Artists />
        <h1 className="nameHeader">Songs</h1>
        <Songs />
        <Songs />
        <Songs />
        </>
    )
}


export default SearchResults