const generateBasicDataObj = (type) => {
    if (type === 'song') {
        return {
            name: {
                hebrew: '',
                arabic: '',
                english: ''
            },
            lyrics: {
                hebrew: '',
                arabic: '',
                english: ''
            },
            originalLang: '',
            artist: '',
            coverArt: '',
            album: '',
            youtubeURL: '',
        };
    }
    return {
        name: {
            hebrew: '',
            arabic: '',
            english: ''
        },
        songs: [],
        imgURL: '',
        albums: [],
    };
};

export default generateBasicDataObj;