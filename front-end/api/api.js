import axios from "axios";

const URL = import.meta.env.MODE === 'development' ? "http://localhost:3000/api" : "/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;