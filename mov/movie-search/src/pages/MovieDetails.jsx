
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/movieApi";

function MovieDetails() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovie = async () => {
    const data = await getMovieDetails(imdbID);
    setMovie(data);
  };

  if (!movie) {
    return <h2 className="text-center text-white">Loading...</h2>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-64 h-auto mb-4 rounded-lg shadow-md"
      />
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Runtime:</strong> {movie.Runtime}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  );
}

export default MovieDetails;
