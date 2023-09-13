import { Link } from "react-router-dom";
import { IMAGE_PATH_BASE } from "../constants";

function DisplayMovies({ movies }) {
  return (
    <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-10 lg:gap-28 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-16 md:px-10 mb-14 mt-12">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default DisplayMovies;

function Movie({ movie }) {
  return (
    <Link to={`/${movie.id}`}>
      <div className="overflow-hidden rounded-lg h-96 cursor-pointer hover:brightness-50 duration-300">
        <img
          src={`${IMAGE_PATH_BASE}${movie.poster_path}`}
          className="w-full h-[85%]"
        />
        <p className="bg-zinc-800 h-[15%] text-white py-4 text-center px-4 text-md font-semibold ">
          {movie.title.split(" ").slice(0, 3).join(" ") + "..."}
        </p>
      </div>
    </Link>
  );
}
