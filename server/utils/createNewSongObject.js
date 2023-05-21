const createNewSongObject = (scrapedData) => {
    const {name, lyrics, artist, originalLang } = scrapedData.body
    const newSongObject = {
        name: {
        hebrew: name.hebrew,
         arabic:name.arabic,
          english:name.english.toLowerCase()
        },
      lyrics: {
        hebrew: lyrics.hebrew,
         arabic:lyrics.arabic,
          english:lyrics.english
        },
      originalLang,
      artist
    }
    return newSongObject
}

export default createNewSongObject