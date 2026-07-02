import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 duration-300">

      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">

        <h2 className="font-bold text-lg">
          {movie.Title}
        </h2>

        <p>{movie.Year}</p>

        <p className="capitalize">
          {movie.Type}
        </p>

        <Link
          to={`/movie/${movie.imdbID}`}
          className="text-blue-600 font-semibold"
        >
          View Details
        </Link>

      </div>

    </div>
  );
}

export default MovieCard;