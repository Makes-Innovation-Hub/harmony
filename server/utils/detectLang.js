function detectLanguage(text) {
    const englishRegex = /^[A-Za-z\s]+$/;
    const hebrewRegex = /^[א-ת\s]+$/;
    const arabicRegex = /^[؀-ۿ\s]+$/;

    let englishCount = 0;
    let hebrewCount = 0;
    let arabicCount = 0;
    const splitted = text[0].split('');
    for (let i = 0; i < splitted.length; i++) {
        const char = splitted[i];
        if (englishRegex.test(char)) {
            englishCount++;
        } else if (hebrewRegex.test(char)) {
            hebrewCount++;
        } else if (arabicRegex.test(char)) {
            arabicCount++;
        }
    }

    if (englishCount > hebrewCount && englishCount > arabicCount) {
        return "en";
    } else if (hebrewCount > englishCount && hebrewCount > arabicCount) {
        return "he";
    } else if (arabicCount > englishCount && arabicCount > hebrewCount) {
        return "ar";
    } else {
        return false;
    }
}

export default detectLanguage;