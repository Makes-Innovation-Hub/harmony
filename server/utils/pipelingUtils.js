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

export function isSameWeek(date1, date2) {
    // Get the start of the week for the first date
    const startOfWeek1 = new Date(date1);
    startOfWeek1.setDate(date1.getDate() - date1.getDay());

    // Get the start of the week for the second date
    const startOfWeek2 = new Date(date2);
    startOfWeek2.setDate(date2.getDate() - date2.getDay());

    // Check if the start of the weeks are equal
    return startOfWeek1.getTime() === startOfWeek2.getTime();
}