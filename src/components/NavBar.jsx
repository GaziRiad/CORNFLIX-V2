import SearchBar from "./SearchBar";
import BookMark from "./BookMark";

function NavBar() {
  return (
    <nav className="bg-slate-900 py-6 space-y-4 flex flex-col justify-between items-center px-16 md:flex-row md:space-y-0 ">
      <img src="logo.png" alt="Cornflix Logo" className="" />
      <SearchBar />
      <BookMark />
    </nav>
  );
}

export default NavBar;
