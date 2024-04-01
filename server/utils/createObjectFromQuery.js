const createObjectFromQuery = (data) => {
  const {
    name,
    lyrics,
    originalLang,
    song,
    albums,
    album,
    youtubeURL,
    imgURL,
    date,
    language,
    songId,
  } = data;
  const filteredValues = {};

  if (name !== undefined) {
    if (name.hebrew) {
      filteredValues["name.hebrew"] = name.hebrew;
    }
    if (name.english) {
      filteredValues["name.english"] = new RegExp(`^${name.english}`, "i");
    }

    if (name.arabic) {
      filteredValues["name.arabic"] = name.arabic;
    }
  }
  if (lyrics !== undefined) {
    filteredValues.lyrics = lyrics;
  }
  if (song !== undefined) {
    filteredValues.song = song;
  }
  if (originalLang !== undefined) {
    filteredValues.originalLang = originalLang;
  }
  if (albums !== undefined) {
    filteredValues.albums = albums;
  }
  if (album !== undefined) {
    filteredValues.album = album;
  }
  if (youtubeURL !== undefined) {
    filteredValues.youtubeURL = youtubeURL;
  }
  if (imgURL !== undefined) {
    filteredValues.imgURL = imgURL;
  }
  if (date !== undefined) {
    filteredValues.date = date;
  }
  if (language !== undefined) {
    filteredValues.language = language;
  }
  if (songId !== undefined) {
    filteredValues.songId = songId;
  }
  return filteredValues;
};

export default createObjectFromQuery;
