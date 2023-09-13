function NavBar({ children }) {
  return (
    <nav className="bg-slate-900 py-6 space-y-4 flex flex-col justify-between items-center px-16 md:flex-row md:space-y-0 ">
      <img src="logo.png" alt="Cornflix Logo" className="" />
      {children}
    </nav>
  );
}

export default NavBar;
