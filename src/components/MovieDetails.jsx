import { IMAGE_PATH_BASE } from "../constants";

function MovieDetails({ movie }) {
  return (
    <div className="bg-gray-600  py-12 text-white px-4 md:px-0">
      <div className="container mx-auto flex flex-col items-center py-12 px-12 rounded-lg gap-6 md:flex-row bg-gray-900 ">
        <img
          src={`${IMAGE_PATH_BASE}${movie.poster_path}`}
          className=" h-[35vh]"
        />
        <div>
          <p className="text-3xl text-center font-bold mb-6 lg:text-left xl:text-4xl">
            {movie.title}
          </p>
          <p className="text-xl text-center leading-8 text-slate-300 px-4 lg:text-left lg:px-0 ">
            {movie.overview}
          </p>
          <div className="mt-6 flex flex-col gap-2 items-center lg:items-start">
            <p>
              <span className="text-lg font-medium pr-4 text-gray-200">
                IMDB Rating :
              </span>
              <span className="text-lg font-medium">
                {movie.vote_average} ⭐
              </span>
            </p>
            <p>
              <span className="text-lg font-medium pr-4 text-gray-200">
                Realse Date :
              </span>
              <span>{movie.release_date} 📅</span>
            </p>
            <p>
              <span className="text-lg font-medium pr-4 text-gray-200">
                Movie Length :
              </span>
              <span>{movie.runtime} ⏳</span>
            </p>
            <p>
              <span className="text-lg font-medium pr-4 text-gray-200">
                Movie Budget :
              </span>
              <span>{movie.budget} 💵</span>
            </p>
            <p className="">
              <span className="inline-block mb-2 text-lg font-medium text-gray-200 w-full text-center lg:inline ">
                Movie Genre :
              </span>
              <span className=" flex flex-wrap md:inline-block md:pl-4">
                {movie?.genres?.map((genre) => (
                  <span
                    key={genre.name}
                    className={`uppercase mr-2 px-4 py-1.5 text-white rounded-full text-sm ${
                      genre.name.toLowerCase() === "action"
                        ? " bg-red-500"
                        : genre.name.toLowerCase() === "adventure"
                        ? "bg-green-500"
                        : genre.name.toLowerCase() === "drama" ||
                          genre.name.toLowerCase() === "fantasy"
                        ? "bg-violet-500"
                        : genre.name.toLowerCase() === "comedy"
                        ? " bg-pink-500"
                        : "bg-blue-500"
                    }`}
                  >
                    {genre.name}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
