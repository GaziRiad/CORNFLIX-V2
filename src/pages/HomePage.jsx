import { useEffect } from "react";

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
import DisplayMovies from "../components/DisplayMovies";
import Button from "../components/Button";

function HomePage({
  dispatch,
  popularMovies,
  query,
  searchedMovies,
  currentPage,
}) {
  let featuredMovie = popularMovies[0];

  useEffect(() => {
    if (query.length > 2) return;
    async function fetchPopularMovies() {
      const res = await fetch(
        `${POPULAR_URL}api_key=${API_KEY}${URL_QUERIES}&page=${currentPage}`
      );
      const data = await res.json();

      dispatch({ type: "addPopularMovies", payload: data.results });
    }
    fetchPopularMovies();
  }, [dispatch, query, currentPage]);

  useEffect(() => {
    if (query.length < 3) return;
    async function fetchSearchMovies() {
      dispatch({ type: "clearSearchedMovies", payload: [] });
      const res = await fetch(
        `${SEARCH_MOVIE_URL}query=${query}&api_key=${API_KEY}${URL_QUERIES}&page=${currentPage}`
      );
      const data = await res.json();
      dispatch({ type: "addSearchedMovies", payload: data.results });
    }
    fetchSearchMovies();
  }, [query, currentPage, dispatch]);

  return (
    <>
      <header>
        <NavBar>
          <SearchBar query={query} dispatch={dispatch} />
          <BookMark />
        </NavBar>
      </header>
      <main className="flex flex-col items-center">
        {query.length <= 2 && (
          <>
            <FeaturedMovie movie={featuredMovie} />
            <h2 className="uppercase font-bold text-xl px-16 md:px-10 mt-10">
              popular movies
            </h2>
            <DisplayMovies movies={popularMovies} />
          </>
        )}
        {query.length > 2 && (
          <>
            <h2 className="uppercase font-bold text-xl px-16 md:px-10 mt-10">
              Searched movies
            </h2>
            <DisplayMovies movies={searchedMovies} />
          </>
        )}
        <Button dispatch={dispatch}>Load more...</Button>
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
