export const genGoogleLyricsUrl = (songName, singerName) => {
  const singerNameUpdated = singerName.replaceAll(" ", "+");
  const songNameUpdated = songName.replaceAll(" ", "+");
  const namesForUrl = `${encodeURIComponent(
    songNameUpdated
  )}+${encodeURIComponent(singerNameUpdated)}+lyrics`;
  return `https://www.google.com/search?q=${namesForUrl}`;
};
