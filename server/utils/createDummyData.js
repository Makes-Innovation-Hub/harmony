const dummySong = {
    name: {
        hebrew: 'שיר',
        arabic: 'قصيدة',
        english: 'song'
    },
    lyrics:{
        hebrew: 'מילים',
        arabic: 'كلمات',
        english: 'lyrics',
    },
    originalLang: 'English',
    imgURL: 'URL',
    album: 'album name',
    youtubeURL: 'URL',
    artistName: 'Drake'
}

const dummyArtist = {
    name: {
        hebrew: 'אמן',
        arabic: 'فنان',
        english: 'artist'
    },
    
    imgURL: 'URL',
    albums: ['first album', 'second album'],
}

const dummySongsArray = [
    {
        name: {
            hebrew: 'שיר',
            arabic: 'قصيدة',
            english: 'song'
        },
        lyrics:{
            hebrew: 'מילים',
            arabic: 'كلمات',
            english: 'lyrics',
        },
        origianlLang: 'English',
        imgURL: 'URL',
        album: 'album name',
        youtubeURL: 'URL',
        artistName: 'Drake'
    },
    {
        name: {
            hebrew: '2שיר',
            arabic: '2قصيدة',
            english: 'song2'
        },
        lyrics:{
            hebrew: '2מילים',
            arabic: '2كلمات',
            english: 'lyrics2',
        },
        origianlLang: 'English',
        imgURL: 'URL',
        album: 'album name',
        youtubeURL: 'URL',
        artistName: 'John Doe'
    }
]

const createDummySong = (newSongObject) => {

    const name = newSongObject['name.english']
    const {album, originalLang} = newSongObject

    return {
        name: {
            hebrew: 'שיר',
            arabic: 'قصيدة',
            english: name
        },
        lyrics:{
            hebrew: 'מילים',
            arabic: 'كلمات',
            english: 'lyrics',
        },
        originalLang,
        imgURL: 'URL',
        album: album,
        youtubeURL: 'URL',
        artistName: 'Eyal'
    }

}

const createDummyArtist = (name, album) => {
    return {
        name: {
        hebrew: 'אמן',
        arabic: 'فنان',
        english: name
    },
    
    imgURL: 'URL',
    albums: ['first album', 'second album', album],
}
}



export {dummySong, dummySongsArray, dummyArtist, createDummyArtist, createDummySong}