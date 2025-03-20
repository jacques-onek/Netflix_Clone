import { useQuery} from "@tanstack/react-query";
import { fetchMoviesByGenre } from "../../service/tmdb";
import Swipper from "./Swipper";
import { SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";






const MoviesShowsByGenres = () => {

const { data: dramaMovieShows } = useQuery({queryKey:["dramaMovieShows"], queryFn: () => fetchMoviesByGenre(18)});
const { data: comedyMovieShows } = useQuery({queryKey: ["comedyMovieShows"], queryFn: () => fetchMoviesByGenre(35)});
const { data: actionmovieShows} = useQuery({queryKey: ["actionMoviesShows"], queryFn:() =>  fetchMoviesByGenre(28)});
const { data: animationmovieShows} = useQuery({queryKey: ["animationMovies"], queryFn:() =>  fetchMoviesByGenre(80)});
const { data: aventuremovieShows} = useQuery({queryKey: ["aventureMovies"], queryFn:() =>  fetchMoviesByGenre(12)});
const { data: fictionmovieShows} = useQuery({queryKey: ["fictionMovies"], queryFn:() =>  fetchMoviesByGenre(878)});
const { data: familymovieShows} = useQuery({queryKey: ["familyMovies"], queryFn:() =>  fetchMoviesByGenre(10751)});
const { data: historyShows} = useQuery({queryKey: ["historyMovies"], queryFn:() =>  fetchMoviesByGenre(36)});
const { data: horrorShows} = useQuery({queryKey: ["horrorMovies"], queryFn:() =>  fetchMoviesByGenre(27)});

  return (

    <div>
        {/* drama movies  */}
        {/* ------------------------------------------------------------------------------- */}
        
          <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> Drama movies</h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevdrama absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevdrama" nextData ="nextdrama">
           {
              dramaMovieShows?.map((data) => (
                 <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.title || data.name}</p>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextdrama absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
          </div>
          </div>

          {/* commedy movies  */}
          {/* ----------------------------------------------------------------- */}

          <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> Commedy moivies </h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevcommedy absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevcommedy" nextData ="nextcommedy">
           {
              comedyMovieShows?.map((data) => (
                 <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.title || data.name}</p>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextcommedy absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
              </div>

          </div>


          {/* actions movies  */}
          {/* ------------------------------------------------------------------- */}
              
          <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> Actions  movies </h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevAction absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevAction" nextData ="nextAction">
           {
              actionmovieShows?.map((data) => (
                 <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.title || data.name}</p>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextAction absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
              </div>
          </div>
          {/* animation movies  */}
          {/* ------------------------------------------------------------------------------ */}
          <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> Animation  movies </h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevAvent absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevAvent" nextData ="nextAvent">
           {
              animationmovieShows?.map((data) => (
                 <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.title || data.name}</p>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextAvent absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
              </div>
          </div>
          {/* aventure movies  */}
          {/* ------------------------------------------------------------------------------------------------ */}
          <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> Aventure  movies </h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevAvent absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevAvent" nextData ="nextAvent">
           {
              aventuremovieShows?.map((data) => (
                 <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.title || data.name}</p>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextAvent absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
              </div>
          </div>
          {/* science fiction  */}
          {/* ------------------------------------------------------------------------------------ */}
          <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> science fiction  movies </h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevAvent absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevAvent" nextData ="nextAvent">
           {
              fictionmovieShows?.map((data) => (
                 <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.title || data.name}</p>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextAvent absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
              </div>
          </div>

          {/* family movies  */}
          {/* -------------------------------------------------------------------------------------------------- */}
          <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> For Family  movies </h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevAvent absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevAvent" nextData ="nextAvent">
           {
              familymovieShows?.map((data) => (
                 <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.title || data.name}</p>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextAvent absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
              </div>
          </div>

          {/* kid's movies  */}
          <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> fetched by Histories movies </h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevAvent absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevAvent" nextData ="nextAvent">
           {
              historyShows?.map((data) => (
                 <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.title || data.name}</p>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextAvent absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
              </div>
          </div>
          {/* film d'horreur  */}
          {/* ------------------------------------------------------------------------------------------------------------------------ */}
          <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> fetched by Horror movies </h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevAvent absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevAvent" nextData ="nextAvent">
           {
              horrorShows?.map((data) => (
                 <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.title || data.name}</p>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextAvent absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
              </div>
          </div>
        </div>
  )
}
export default MoviesShowsByGenres;
