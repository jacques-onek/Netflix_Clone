import { useQuery } from "@tanstack/react-query";
import { fetchMoviesByGenre } from "../../service/tmdb";
import Swipper from "./Swipper";
import { SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const genres = [
  { id: 18, name: "Drama" },
  { id: 35, name: "Comedy" },
  { id: 28, name: "Action" },
  { id: 80, name: "Animation" },
  { id: 12, name: "Aventure" },
  { id: 878, name: "Science Fiction" },
  { id: 10751, name: "Family" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
];
interface MovieCarouselProps {
   genreId: number;
   genreName: string;
 }
 


const MovieCarousel :React.FC<MovieCarouselProps> = ({ genreId, genreName }) => {
  const { data: movies } = useQuery({
    queryKey: [genreName],
    queryFn: () => fetchMoviesByGenre(genreId),
  });

  return (
    <div>
      <h1 className="text-2xl mt-14 mb-8 max-md:my-6">{genreName} Movies</h1>
      <div className="relative w-full">
        <button className={`prev-${genreName.toLowerCase()} absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10`}>
          <FaChevronLeft size={20} />
        </button>
        <Swipper prevData={`prev-${genreName.toLowerCase()}`} nextData={`next-${genreName.toLowerCase()}`}>
          {movies?.map((movie) => (
            <SwiperSlide
              key={movie.id}
              className="flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="h-48 w-72 object-center max-md:h-32 rounded-md hover:scale-95 transition duration-200 ease-out"
              />
              <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{movie.title || movie.name}</p>
            </SwiperSlide>
          ))}
        </Swipper>
        <button className={`next-${genreName.toLowerCase()} absolute -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10`}>
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

const MoviesShowsByGenres = () => {
  return (
    <div>
      {genres.map(({ id, name }) => (
        <MovieCarousel key={id} genreId={id} genreName={name} />
      ))}
    </div>
  );
};

export default MoviesShowsByGenres;
