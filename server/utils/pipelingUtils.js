export function updateObjLanguage(obj, field, checkKey, value) {
    const notFiledArr = [];
    let originalLang;
    switch (checkKey) {
        case 'en':
            obj[field].english = value;
            notFiledArr.push('hebrew', 'arabic');
            originalLang = 'english';
            break;
        case 'he':
            obj[field].hebrew = value;
            notFiledArr.push('english', 'arabic');
            originalLang = 'hebrew';
            break;
        case 'ar':
            obj[field].arabic = value;
            notFiledArr.push('hebrew', 'english');
            originalLang = 'arabic';
            break;
    }
    return [obj, notFiledArr, originalLang];
}

export function initSongData() {
    const songData = {};
    songData.name = {};
    songData.name.hebrew = {};
    songData.name.arabic = {};
    songData.name.english = {};
    songData.lyrics = {};
    songData.lyrics.english = {};
    songData.lyrics.hebrew = {};
    songData.lyrics.arabic = {};
    return songData;
}