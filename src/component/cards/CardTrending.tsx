import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMediaData } from "../../page/queries/UseMultipleQueries";
import "swiper/css"; 
import "swiper/css/navigation";


const CardTrending = () => {

//   console.log(` the data fetched is ${tv}`)


  const { trending:trend } = useMediaData();


  if (!trend || !Array.isArray(trend) || trend.length === 0) {
    return <p className="text-center text-gray-500">Aucun film disponible</p>;
  }

  return (
    <div className="relative w-full " >

        {/* Bouton Précédent */}
      <div className="  mr-10 rounded-full bg-black bg-opacity-100">
        <button className="prevTrend absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
           <FaChevronLeft size={20} />
        </button>
      </div>
    <Swiper
    modules={[Navigation]} // Espace entre les slides
    spaceBetween={3}
    breakpoints={{
        320: { slidesPerView: 3 }, // Mobile
        480: { slidesPerView: 3 }, // Grand mobile
        768: { slidesPerView: 4}, // Tablette
        1024: { slidesPerView: 4 }, // Desktop
        1280: { slidesPerView: 5 }, // Grand écran
      }}
    navigation={{ nextEl: ".nextTrend", prevEl: ".prevTrend" }} // Lie les boutons
    loop={true} // Boucle infinie
    className="w-full flex overflow-hidden"
    >
      {
         trend.map((data) => (
          <SwiperSlide key={data.id} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
            <p className="text-lg mx-2 my-4 max-md:text-sm truncate">{data.title || data.name}</p>
         </SwiperSlide>
         ))
      }
    </Swiper>
          {/* Bouton Suivant */}
      <button  className="nextTrend absolute max-md:hidden  -right-10 top-24 -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10"  >
        <FaChevronRight size={20} />
      </button>
    </div>
  )
}

export default CardTrending
