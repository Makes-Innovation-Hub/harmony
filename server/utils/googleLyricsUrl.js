export const genGoogleLyricsUrl = (songName, singerName) => {
  console.log("singerName", singerName);
  console.log("songName", songName);

  // const singerNameUpdated = singerName.replaceAll(" ", "+");
  // const songNameUpdated = songName.replaceAll(" ", "+");
  // const namesForUrl = `${encodeURIComponent(
  //   songNameUpdated
  // )}+${encodeURIComponent(singerNameUpdated)}+lyrics`;

  // return `https://www.google.com/search?q=${namesForUrl}`;

  const namesForUrl = `${encodeURIComponent(songName)}+${encodeURIComponent(
    singerName
  )}+lyrics`;
  return `https://www.google.com/search?q=${namesForUrl}`;
};
