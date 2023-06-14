function populateByLang(text, obj) {
    switch (originalLang) {
        case 'en':
            songData.lyrics.english = lyrics;
            break;
        case 'he':
            songData.lyrics.hebrew = lyrics;
            break;
        case 'ar':
            songData.lyrics.arabic = lyrics;
            break;
    }
}