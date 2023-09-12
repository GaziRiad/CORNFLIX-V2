function BookMark() {
  return (
    <div className="flex gap-1 text-white justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 -960 960 960"
        width="32"
        fill="white"
      >
        <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Z" />
      </svg>
      <span className="font-bold uppercase text-lg tracking-widest">
        Bookmark
      </span>
    </div>
  );
}

export default BookMark;
