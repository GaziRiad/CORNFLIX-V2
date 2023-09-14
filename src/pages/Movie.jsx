import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_KEY, URL_QUERIES } from "../constants";

import NavBar from "../components/NavBar";
import MovieDetails from "../components/MovieDetails";
import MovieTrailer from "../components/MovieTrailer";
import MovieActors from "../components/MovieActors";
import Footer from "../components/Footer";

function Movie() {
  const { id: MovieID } = useParams();
  const [movie, setMovie] = useState({});
  const [videoKey, setVideoKey] = useState("");
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${MovieID}?api_key=${API_KEY}${URL_QUERIES}`
      );
      const data = await res.json();
      setMovie(data);
    }
    fetchMovie();
  }, [MovieID]);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch(
        `
        https://api.themoviedb.org/3/movie/${MovieID}/videos?api_key=${API_KEY}${URL_QUERIES}`
      );
      const data = await res.json();
      setVideoKey(data.results.find((vid) => vid.type === "Trailer").key);
    }
    fetchVideos();
  }, [MovieID]);

  useEffect(() => {
    async function fetchActors() {
      const res = await fetch(
        `
        https://api.themoviedb.org/3/movie/${MovieID}/credits?api_key=${API_KEY}${URL_QUERIES}`
      );
      const data = await res.json();
      setActors(data.cast);
    }
    fetchActors();
  }, [MovieID]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <MovieDetails movie={movie} />

        <MovieTrailer videoID={videoKey} />

        <div className="container  mx-auto px-20 lg:px-3 xl:px-0">
          <h2 className="uppercase self-start font-bold text-xl text-center md:text-left mt-10 ">
            Actors
          </h2>
        </div>
        <MovieActors actors={actors} />
      </main>
      <Footer />
    </>
  );
}

export default Movie;
