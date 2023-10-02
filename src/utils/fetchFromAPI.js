import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    type: "video",
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "2f019df4fbmsh2d3ad2a0ea30fd4p1c5f46jsnd00712d9ca80",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
