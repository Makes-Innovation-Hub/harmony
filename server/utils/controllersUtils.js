const createSongOrArtistObject = (data) => {
    const {name, lyrics, originalLang, song, albums, album, youtubeURL, imgURL } = data
    const filteredValues = {}
    
    if (name !== undefined){
      filteredValues.name = 
      {
        hebrew: name.hebrew,
        arabic:name.arabic,
        english:name.english.toLowerCase()
      }
    }
    if (lyrics !== undefined){
      filteredValues.lyrics = 
      {
        hebrew: lyrics.hebrew,
        arabic:lyrics.arabic,
        english:lyrics.english
      }
    }
    if (song !== undefined){
      filteredValues.song = song
    }
    if (originalLang !== undefined){
      filteredValues.originalLang = originalLang
    }
    if (albums !== undefined){
      filteredValues.albums = albums
    }
    if (album !== undefined){
      filteredValues.album = album
    }
    if (youtubeURL !== undefined){
      filteredValues.youtubeURL = youtubeURL
    }
    if (imgURL !== undefined){
      filteredValues.imgURL = imgURL
    }
    
    return filteredValues
}


export default createSongOrArtistObject