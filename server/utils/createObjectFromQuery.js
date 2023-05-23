const createObjectFromQuery = (data) => {
    const {name, lyrics, originalLang, song, albums, album, youtubeURL, imgURL, date } = data
    const filteredValues = {}
    
    if (name !== undefined){
      if (name.hebrew) {
        filteredValues['name.hebrew'] = name.hebrew
      }
      if (name.english) {
        filteredValues['name.english'] = name.english
      }
     
      if (name.arabic) {
        filteredValues['name.arabic'] = name.arabic
      }
    }
    if (lyrics !== undefined){
      filteredValues.lyrics = lyrics
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
    if (date !== undefined){
      filteredValues.date = date
    }
    return filteredValues
}


export default createObjectFromQuery