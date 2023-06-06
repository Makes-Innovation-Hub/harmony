export const genGoogleLyricsUrl = (songName, singerName) => {
  const singerNameUpdated = singerName.replaceAll(" ", "+");
  const songNameUpdated = songName.replaceAll(" ", "+");
  const namesForUrl = `${songNameUpdated}+${singerNameUpdated}`;
  return `https://www.google.com/search?q=${namesForUrl}+lyrics`;
};
