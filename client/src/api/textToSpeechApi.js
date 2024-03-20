import axios from "axios";
import { serverApiUrl } from "../constants/urls";

export const getAudioFromLyrics = async (lyrics) =>
  (response = await axios.post(`${serverApiUrl}/generate-speech`, {
    lyrics,
  }));
