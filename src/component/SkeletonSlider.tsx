import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";



const SkeletonSlider = () => {

    const arr = Array.from({length:10})

  return (
    <Swiper 
    modules={[Navigation]}
    spaceBetween={3} // Espace entre les slides
    breakpoints={{
      320: { slidesPerView: 3 }, // Mobile
      480: { slidesPerView: 3 }, // Grand mobile
      768: { slidesPerView: 4}, // Tablette
      1024: { slidesPerView: 4 }, // Desktop
      1280: { slidesPerView: 5 }, // Grand écran
    }}
    loop={true} // Boucle infinie
    className="w-full"
    >
     {
        arr.map((_,i) => (
      <SwiperSlide key={i} className='flex justify-center py-28'>
         <motion.div  animate={{opacity:[0.33,0.67,0.80,1]}}  transition={{duration:3, repeat:Infinity}} className='h-40 rounded-md w-52 shadow-lg bg-neutral-900 ease-in-out '>
           
         </motion.div>
      </SwiperSlide>
        ))

     }
    </Swiper>
  )
}

export default SkeletonSlider
