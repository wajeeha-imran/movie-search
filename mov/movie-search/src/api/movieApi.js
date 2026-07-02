import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const movieAPI = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const searchMovies = async (searchTerm, page = 1) => {
  try {
    const response = await movieAPI.get("/", {
      params: {
        apikey: API_KEY,
        s: searchTerm,
        page,
      },
    });

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(error);

    return {
      Response: "False",
      Error: error.message,
    };
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await movieAPI.get("/", {
      params: {
        apikey: API_KEY,
        i: id,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);

    return {
      Response: "False",
      Error: error.message,
    };
  }
};