import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_KEY, URL_QUERIES } from "../constants";

import NavBar from "../components/NavBar";
import MovieDetails from "../components/MovieDetails";
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
    <>
      <header>
        <NavBar />
      </header>
      <MovieDetails movie={movie} />
      <h2 className="uppercase font-bold text-xl px-16 md:px-px-10 mt-10">
        Actors
      </h2>
    </>
  );
}

export default Movie;
