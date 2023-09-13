import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Movie from "./pages/Movie";
import { useReducer } from "react";

const InitialState = {
  popularMovies: [],
  query: "",
  searchedMovies: [],
  currentPage: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "addPopularMovies":
      return {
        ...state,
        popularMovies:
          state.currentPage === 1
            ? action.payload
            : [...state.popularMovies, ...action.payload],
      };
    case "clearSearchedMovies":
      return { ...state, searchedMovies: [] };
    case "addSearchedMovies":
      return {
        ...state,
        searchedMovies: [...state.searchedMovies, ...action.payload],
      };
    case "setQuery":
      return { ...state, query: action.payload };
    case "loadMore":
      return { ...state, currentPage: state.currentPage + 1 };
    default:
      return 1;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const { popularMovies, searchedMovies, query, currentPage } = state;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              dispatch={dispatch}
              popularMovies={popularMovies}
              query={query}
              searchedMovies={searchedMovies}
              currentPage={currentPage}
            />
          }
        />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}
