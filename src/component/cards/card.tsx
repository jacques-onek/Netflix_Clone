import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useMediaData } from "../../page/queries/UseMultipleQueries";
import "swiper/css"; 
import "swiper/css/navigation";




const Card = () => {

  

    const { movies:movie } = useMediaData();
  

  if (!movie || !Array.isArray(movie) || movie.length === 0) {
    return <p className="text-center text-gray-500">Aucun film disponible</p>;
  }

  return (
    <div className="relative w-full ">

        {/* Bouton Précédent */}
      <div className="  mr-10 rounded-full bg-black bg-opacity-100">
        <button className="prev absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
           <FaChevronLeft size={20} />
        </button>
      </div>
    <Swiper
    modules={[Navigation]} // Espace entre les slides
    spaceBetween={1}
    breakpoints={{
      320: { slidesPerView: 3 }, // Mobile
      480: { slidesPerView: 3 }, // Grand mobile
      768: { slidesPerView: 4}, // Tablette
      1024: { slidesPerView: 4 }, // Desktop
      1280: { slidesPerView: 5 }, // Grand écran
    }}
    navigation={{ nextEl: ".next", prevEl: ".prev" }} // Lie les boutons
    loop={true} // Boucle infinie
    className="w-full flex overflow-hidden"
    >
      {
         movie.map((data) => (
          <SwiperSlide key={data.id} className='flex justify-around pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200 '>
            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 max-md:h-32 object-center rounded-md  shadow-2xl"/>
            <p className="text-lg mx-2 my-4 max-md:text-sm truncate ">{data.title}</p>
         </SwiperSlide>
         ))
      }
    </Swiper>
          {/* Bouton Suivant */}
      <button className="next absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
        <FaChevronRight size={20} />
      </button>
    </div>
  )
}

export default Card
