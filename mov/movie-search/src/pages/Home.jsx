import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { searchMovies } from "../api/movieApi";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, [searchTerm, page]);

  const fetchMovies = async () => {
    setLoading(true);

    const data = await searchMovies(searchTerm, page);

    if (data.Response === "True") {
      if (page === 1) {
        setMovies(data.Search);
      } else {
        setMovies((prev) => [...prev, ...data.Search]);
      }

      setHasMore(page * 10 < Number(data.totalResults));
    } else {
      setMovies([]);
      setHasMore(false);
      console.log(data.Error);
    }

    setLoading(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
    setMovies([]);
    setHasMore(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-100">

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
  Movie Search App 🎬
</h1>

<div className="flex justify-center items-center h-[25vh]">
  <SearchBar onSearch={handleSearch} />
</div>

      {loading && (
        <p className="text-center text-xl mt-6">
          Loading...
        </p>
      )}

      {!loading && movies.length === 0 && (
        <p className="text-center text-xl mt-6">
          No movies found.
        </p>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">

        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
          />
        ))}

      </div>

      <Pagination
        page={page}
        setPage={setPage}
        hasMore={hasMore}
      />

    </div>
  );
}

export default Home;