function MovieTrailer({ videoID }) {
  return (
    <>
      <div className="container  mx-auto px-20 lg:px-3 xl:px-0">
        <h2 className="uppercase self-start font-bold text-xl text-center md:text-left mt-10 mb-6 ">
          Trailer
        </h2>
      </div>
      <div className="container mx-auto flex justify-center mb-12 px-4 md:px-0">
        <iframe
          width="100%"
          height="707"
          src={`https://www.youtube.com/embed/${videoID}`}
          title="SPIDER-MAN: ACROSS THE SPIDER-VERSE - Creating Pavitr Prabhakar"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default MovieTrailer;
