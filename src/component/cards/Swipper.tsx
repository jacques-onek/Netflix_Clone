import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/navigation";
import { ReactNode } from "react";



const Swipper = ({children,prevData,nextData}:{children:ReactNode,prevData:string , nextData:string}) => {
  return (
    <div>

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
    navigation={{ nextEl:`.${nextData}`, prevEl:`.${prevData}` }} // Lie les boutons
    loop={true} // Boucle infinie
    className="w-full flex overflow-hidden"
    >
      { children}
    </Swiper>

    </div>
  )
}

export default Swipper
