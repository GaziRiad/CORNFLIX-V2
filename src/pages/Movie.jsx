import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_KEY, URL_QUERIES, IMAGE_PATH_BASE } from "../constants";

import NavBar from "../components/NavBar";
function Movie() {
  const { id: MovieID } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${MovieID}?api_key=${API_KEY}${URL_QUERIES}`
      );
      const data = await res.json();
      console.log(data);
      setMovie(data);
    }
    fetchMovie();
  }, [MovieID]);

  return (
    <div className="bg-slate-300">
      <header>
        <NavBar />
      </header>
      <div className="container mx-auto flex flex-col items-center py-12 gap-6 md:flex-row">
        <img
          src={`${IMAGE_PATH_BASE}${movie.poster_path}`}
          className=" h-[35vh]"
        />
        <div>
          <p className="text-3xl text-center font-bold mb-6 lg:text-left xl:text-4xl">
            {movie.title}
          </p>
          <p className="text-xl text-center leading-8 text-slate-700 px-4 lg:text-left lg:px-0 ">
            {movie.overview}
          </p>
          <div className="mt-6 flex flex-col gap-2 items-center lg:items-start">
            <p>
              <span className="text-lg font-medium pr-4 text-zinc-700">
                IMDB Rating :
              </span>
              <span className="text-lg font-medium text-slate-950">
                {movie.vote_average} ⭐
              </span>
            </p>
            <p>
              <span className="text-lg font-medium pr-4 text-zinc-700">
                Realse Date :
              </span>
              <span>{movie.release_date} 📅</span>
            </p>
            <p>
              <span className="text-lg font-medium pr-4 text-zinc-700">
                Movie Length :
              </span>
              <span>{movie.runtime} ⏳</span>
            </p>
            <p>
              <span className="text-lg font-medium pr-4 text-zinc-700">
                Movie Budget :
              </span>
              <span>{movie.budget} 💵</span>
            </p>
            <p className="">
              <span className="text-lg font-medium pr-4 text-zinc-700">
                Movie Genre :
              </span>
              {movie?.genres?.map((genre) => (
                <span
                  key={genre.name}
                  className={`uppercase mr-2 px-4 py-1.5 text-white rounded-full text-sm  ${
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
