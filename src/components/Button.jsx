function Button({ children, setCurrentPage }) {
  return (
    <button
      onClick={() => setCurrentPage((cur) => cur + 1)}
      className="text-lg bg-slate-600 w-fit self-center text-white font-medium rounded-full px-6 py-2 mb-8 hover:bg-slate-900"
    >
      {children}
    </button>
  );
}

export default Button;
