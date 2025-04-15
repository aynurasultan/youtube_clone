
import axios from "axios";

const api = axios.create({
  baseURL: "https://yt-api.p.rapidapi.com", 
  headers: {
    'x-rapidapi-key': 'd2849b9dd5msh676b2ffc75c6606p1c96d9jsn049d6a2a38a0',
    'x-rapidapi-host': 'yt-api.p.rapidapi.com',
  },
  params: {
    geo: "TR",
    lang: "tr",
  },
});


export default api;