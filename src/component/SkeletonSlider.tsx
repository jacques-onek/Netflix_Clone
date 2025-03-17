import {motion} from 'framer-motion'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";



const SkeletonSlider = () => {

    const arr = Array.from({length:300})

  return (
    <Swiper 
    modules={[Navigation]}
    spaceBetween={3} // Espace entre les slides
    slidesPerView={6} // Nombre de films visibles à la fois
    navigation // Active les boutons de navigation
    loop={true} // Boucle infinie
    className="w-full"
    >
     {
        arr.map((_,i) => (
      <SwiperSlide key={i} className='flex justify-center py-28'>
         <motion.div  animate={{opacity:[0.33,0.67,0.80,1]}}  transition={{duration:3, repeat:Infinity}} className='h-40 rounded-md w-52 shadow-lg bg-neutral-900 ease-in-out '>
           blabalall
         </motion.div>
      </SwiperSlide>
        ))

     }
    </Swiper>
  )
}

export default SkeletonSlider
