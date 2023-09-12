import { Link } from "react-router-dom";
import { IMAGE_PATH_BASE } from "../constants";

function PopularMovies({ movies }) {
  console.log(movies);
  return (
    <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-10 lg:gap-20 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default PopularMovies;

function Movie({ movie }) {
  return (
    <Link to={`/${movie.id}`}>
      <div className="overflow-hidden rounded-lg h-96 cursor-pointer hover:brightness-50 duration-300">
        <img
          src={`${IMAGE_PATH_BASE}${movie.poster_path}`}
          className="w-full h-[80%]"
        />
        <p className="bg-slate-900 h-[20%] text-white py-4 text-center px-4 text-xl font-semibold ">
          {movie.title.split(" ").slice(0, 3).join(" ") + "..."}
        </p>
      </div>
    </Link>
  );
}
