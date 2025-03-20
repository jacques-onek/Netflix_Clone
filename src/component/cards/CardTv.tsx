import {  SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMediaData } from "../../page/queries/UseMultipleQueries";
import Swipper from "./Swipper";


const CardTv = () => {

//   console.log(` the data fetched is ${tv}`)

  const { tvShows:tv } = useMediaData();


  if (!tv || !Array.isArray(tv) || tv.length === 0) {
    return <p className="text-center text-gray-500">Aucun film disponible</p>;
  }

  return (
    <div className="relative w-full " >

        {/* Bouton Précédent */}
      <div className="  mr-10 rounded-full bg-black bg-opacity-100">
        <button className="prevTv absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
           <FaChevronLeft size={20} />
        </button>
      </div>
    <Swipper prevData="prevTv"  nextData="nextTv">
      {
         tv.map((data) => (
          <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  hover:scale-95 rounded-md transition duration-200 ease-out"/>
            <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.name}</p>
         </SwiperSlide>
         ))
      }
    </Swipper>
          {/* Bouton Suivant */}
      <button  className="nextTv absolute max-md:hidden -right-10 top-24 -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10"  >
        <FaChevronRight size={20} />
      </button>
    </div>
  )
}

export default CardTv
