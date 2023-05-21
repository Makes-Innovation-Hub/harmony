const createSongOrArtistObject = (data) => {
    const {name, lyrics, artist: artistId, originalLang, song: songId } = data
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
    if (artistId !== undefined){
      filteredValues.artistId = artistId
    }
    if (songId !== undefined){
      filteredValues.songId = songId
    }
    if (originalLang !== undefined){
      filteredValues.originalLang = originalLang
    }
    
    return filteredValues
}


export default createSongOrArtistObject