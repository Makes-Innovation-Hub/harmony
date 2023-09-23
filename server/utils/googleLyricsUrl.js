export const genGoogleLyricsUrl = (songName, singerName) => {
  const namesForUrl = `${encodeURIComponent(songName)}+${encodeURIComponent(
    singerName
  )}+lyrics`;
  return `https://www.google.com/search?q=${namesForUrl}`;
};
