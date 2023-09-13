import { IMAGE_PATH_BASE } from "../constants";

function FeaturedMovie({ movie }) {
  return (
    <div className="flex flex-col items-center bg-slate-800 text-white lg:flex-row mb-10  ">
      <img
        src={`${IMAGE_PATH_BASE}${movie.backdrop_path}`}
        className="w-[100%] lg:w-[60%] h-[45vh] lg:h-[55vh]"
      />
      <div className="py-10 px-12 xl:px-16">
        <p className="text-3xl text-center font-bold mb-6 lg:text-left xl:text-4xl">
          {movie.title}
        </p>
        <p className="text-xl text-center leading-8 text-slate-200 lg:text-left">
          {movie.overview}
        </p>
      </div>
    </div>
  );
}

export default FeaturedMovie;
