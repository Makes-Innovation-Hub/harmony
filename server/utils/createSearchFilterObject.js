
const createSearchFilterObject = (req) => {
    const {name, album, artist} = req.body
    const filter = {};

    if (name !== undefined){
        filter.name.hebrew = name
        filter.name.arabic = name
        filter.name.english = name.toLowerCase()
    }
    if(album !== undefined){
        filter.album = album.toLowerCase()
    }
    if(artist !== undefined){
        filter.artist.name.hebrew = artist
        filter.artist.name.arabic = artist
        filter.artist.name.english = artist.toLowerCase()
    }
    return filter
}

export default createSearchFilterObject