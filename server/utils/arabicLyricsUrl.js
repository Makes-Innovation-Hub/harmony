export const genArabicLyricsUrl = (singerName, songName) => {
  const singerNameUpdated = singerName.replaceAll(" ", "-");
  const songNameUpdated = songName.replaceAll(" ", "-");
  const namesForUrl = `${singerNameUpdated}-${songNameUpdated}`;
  return `https://lyricstranslate.com/en/${namesForUrl}-lyrics.html`;
};
