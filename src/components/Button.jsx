function Button({ children, dispatch }) {
  return (
    <button
      onClick={() => dispatch({ type: "loadMore" })}
      className="text-lg bg-slate-600 w-fit self-center text-white font-medium rounded-full px-6 py-2 mb-8 hover:bg-slate-900"
    >
      {children}
    </button>
  );
}

export default Button;
