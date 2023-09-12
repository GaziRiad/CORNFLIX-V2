import { useEffect, useState } from "react";
import FeaturedMovie from "../components/FeaturedMovie";
import NavBar from "../components/NavBar";
import PopularMovies from "../components/PopularMovies";

// import URL from "../constants/index";

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState({});

  useEffect(() => {
    async function fetchPopularMovies() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=db3cf4891cc843bd89f697bffe4118cc&language=en-US&page=1`
      );
      const data = await res.json();
      setFeaturedMovie(data.results[0]);
      setPopularMovies(data.results);
    }
    fetchPopularMovies();
  }, []);

  return (
    <>
      <header className="mb-10">
        <NavBar />
        <FeaturedMovie movie={featuredMovie} />
      </header>
      <main className=" px-16 md:px-10 mb-24">
        <h2 className="uppercase font-bold text-xl mb-6">popular movies</h2>
        <PopularMovies movies={popularMovies} />
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
