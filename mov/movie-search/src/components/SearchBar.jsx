import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex justify-center gap-4"
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg px-5 py-3 w-80"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;