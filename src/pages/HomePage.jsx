import { useEffect, useState } from "react";

import {
  API_KEY,
  POPULAR_URL,
  SEARCH_MOVIE_URL,
  URL_QUERIES,
} from "../constants";
import FeaturedMovie from "../components/FeaturedMovie";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import BookMark from "../components/BookMark";
import PopularMovies from "../components/PopularMovies";

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState({});

  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      const res = await fetch(`${POPULAR_URL}api_key=${API_KEY}${URL_QUERIES}`);
      const data = await res.json();
      setFeaturedMovie(data.results[0]);
      setPopularMovies(data.results);
    }
    fetchPopularMovies();
  }, []);

  useEffect(() => {
    if (query.length < 3) return;
    async function fetchSearchMovies() {
      const res = await fetch(
        `${SEARCH_MOVIE_URL}query=${query}&api_key=${API_KEY}${URL_QUERIES}`
      );
      const data = await res.json();
      console.log(data);
      setSearchedMovies(data.results);
    }
    fetchSearchMovies();
  }, [query]);

  return (
    <>
      <header className="">
        <NavBar>
          <SearchBar query={query} setQuery={setQuery} />
          <BookMark />
        </NavBar>
      </header>
      <main className=" px-16 md:px-10 mb-24">
        {searchedMovies.length === 0 && (
          <>
            <FeaturedMovie movie={featuredMovie} />
            <h2 className="uppercase font-bold text-xl mb-6">popular movies</h2>
            <PopularMovies movies={popularMovies} />
          </>
        )}
        {searchedMovies && <PopularMovies movies={searchedMovies} />}
      </main>
      <footer className="bg-slate-300 py-8">
        <p className="text-center">
          &copy; 2023, fully designed and developed by{" "}
          <a
            href="https://twitter.com/Riadh_Gazi"
            target="_blank"
            rel="noreferrer"
            className="underline font-semibold"
          >
            RIAD HALLOUCH
          </a>
          , using TMDB API.
        </p>
      </footer>
    </>
  );
}

export default HomePage;
