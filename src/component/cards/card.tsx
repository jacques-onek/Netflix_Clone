import {  SwiperSlide } from "swiper/react";
import { useMediaData } from "../../page/queries/UseMultipleQueries";
import "swiper/css"; 
import "swiper/css/navigation";
import Swipper from "./Swipper";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MoviesShowsByGenres from "./CardGenre";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";



const Card = () => {

  const navigate = useNavigate()

    const { movies:movie,TopRatedmovies:TopMv } = useMediaData();

  

  if (!movie || !Array.isArray(movie) || movie.length === 0) {
    return <p className="text-center text-gray-500">Aucun film disponible</p>;
  }

  return (
    <div className="relative w-full ">
      {/* fetcher les films populaire  */}
       <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6 font-extrabold"> Popular Movies </h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevMv absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevMv" nextData ="nextMv ">
           {
              movie.map((data) => (
                 <SwiperSlide key={data.id} onClick={() => navigate(`/movies/${data.id}`)} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" onClick={() => navigate(`/movies/${data.id}`)} className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg   max-md:text-sm truncate">{data.title || data.name}</p>
                    <div className="flex  gap-4" onClick={() => navigate(`/movies/${data.id}`)}>
               <p className="flex text-yellow-500 justify-stretch ">
               {
                  Array.from({ length: 3 }).map((_,index) => (
                     <IoIosStar key={index} size={14}/>
                  ))
               }
               </p>
               <p className="text-xs">{data.vote_average}</p>

              </div>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextMv absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
          </div>
          <div>
              <h1 className="text-2xl  mt-14 mb-8 max-md:my-6 font-extrabold"> Top rating movies </h1>     
            <div className="relative w-full ">
                  {/* Bouton Précédent */}
               <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                  <button className="prevTop absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                   <FaChevronLeft size={20} />
                  </button>
                </div>
          <Swipper prevData="prevTop" nextData ="nextTop ">
           {
             TopMv.map((data) => (
                
                 <SwiperSlide key={data.id} onClick={() => navigate(`/movies/${data.id}`)} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
                    <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
                    <p className="text-lg  my-1 max-md:text-sm truncate">{data.title || data.name}</p>
                                  <div className="flex  gap-4">
                                   <p className="flex text-yellow-500 justify-stretch ">
                                   {
                                      Array.from({ length: 3 }).map((_,index) => (
                                         <IoIosStar key={index} size={14}/>
                                      ))
                                   }
                                   </p>
                                   <p className="text-xs">{data.vote_average}</p>
                    
                                  </div>
                 </SwiperSlide>
              ))
            }
          </Swipper>
              {/* Bouton Suivant */}
              <button className="nextTop absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                <FaChevronRight size={20} />
              </button>
          </div>
       </div>
        <MoviesShowsByGenres/>
       </div>


    </div>
  )
}

export default Card
