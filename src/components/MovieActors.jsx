import { IMAGE_PATH_BASE } from "../constants";

function MovieActors({ actors }) {
  console.log(actors);
  return (
    <div className="container mx-auto grid grid-cols-2 gap-6 gap-y-8 md:grid-cols-3 md:gap-16 lg:gap-14 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mb-14 mt-12 px-10 lg:px-3 xl:px-0">
      {actors.map((actor) => {
        return (
          <div
            className="overflow-hidden rounded-lg h-56  cursor-pointer hover:brightness-50 duration-300"
            key={actor.id}
          >
            <img
              src={`${IMAGE_PATH_BASE}${actor.profile_path}`}
              className="w-full h-[80%]"
            />
            <p className="bg-zinc-800 h-[20%] text-white py-2.5 text-center text-sm font-semibold ">
              {actor.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default MovieActors;
