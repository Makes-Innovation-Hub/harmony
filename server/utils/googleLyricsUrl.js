export const genGoogleLyricsUrl = (songName, singerName) => {
  const singerNameUpdated = singerName.replaceAll(" ", "+");
  const songNameUpdated = songName.replaceAll(" ", "+");
  const namesForUrl = `${songNameUpdated}+${singerNameUpdated}`;
  return `https://www.google.com/search?q=${namesForUrl}+lyrics`;
};

// https://www.google.com/search?q=unicorn+%D7%A0%D7%95%D7%A2%D7%94+%D7%A7%D7%99%D7%A8%D7%9C+lyrics&oq=unicorn+%D7%A0%D7%95%D7%A2%D7%94+%D7%A7%D7%99%D7%A8%D7%9C+lyrics
// return `https://www.google.com/search?q=Unicorn+נועה+קירל+lyrics`;
