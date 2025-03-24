import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails , fetchMovieRecommendations,fetchMovieCast } from "../service/tmdb";
import { useEffect, useState } from "react";
import SkeletonSlider from "../component/SkeletonSlider";
import { BiSolidMoviePlay } from "react-icons/bi"
import { IoIosStar } from "react-icons/io";
import Swipper from "../component/cards/Swipper";
import { SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import NavBar from "../component/NavBar";
  

const MovieDetails = () => {
  const { movieId } = useParams();

  const {data:MovieDetails,isLoading,isError} = useQuery({
    queryKey:["moviedetails",movieId],
    queryFn:() => fetchMovieDetails(movieId!)
  })

  const {data:MovieRecommanded} = useQuery({
    queryKey:["recommanded",movieId],
    queryFn:() => fetchMovieRecommendations(movieId!)
  })

  const {data:MovieCasting} = useQuery({
    queryKey:["casting",movieId],
    queryFn:() => fetchMovieCast(movieId!)
  })

  
  // useEffect(() => {
  //   if (MovieCasting) {
  //     console.table(MovieDetails)
  //   }
  // },[MovieCasting])

 const [bg,setbg] = useState("")

 const navigate = useNavigate()

 useEffect(() => { 
    if (MovieDetails) {
      console.table(MovieDetails)
      const bg_image = `https://image.tmdb.org/t/p/original${MovieDetails?.backdrop_path}`
      setbg(bg_image)
    }
 },[MovieDetails])

 { 
  if (isError) {
    return <h1> network error </h1>
  }
 }

 {
  if (isLoading) {
    return <SkeletonSlider/>
  }
 }

 console.log(`the data is ${MovieDetails.results}`)

  return (
    <div className="overflow-x-hidden">
      <NavBar/>
      <div className="w-screen relative flex pl-14 max-md:pl-2 flex-col justify-between max-md:gap-32 bg-no-repeat max-md:h-[35vh]  top-2 h-[95vh]   bg-cover  bg-center max-md:rounded-sm   " style={{backgroundImage:`url(${bg})`}}>
      <div className="flex flex-col justify-between h-full max-md:ml-10 "/>
      <div className="px-10 max-md:px-6  w-6/12 ml-10 mt-2 h-48  border-0 max-md:py-5  relative -left-14 max-md:w-screen  max-lg:w-full overflow-x-auto">
            <button className="px-20 max-md:px-auto py-3 bg-[#e40813] z-50 max-md:py-2 outline-none transition duration-200 hover:bg-red-700 text-white rounded-xl max-lg:w-[30rem] max-lg:py-8 max-lg:text-3xl max-md:w-auto  max-md:px-4 max-md:text-xl"> 
                <div className="flex  gap-4 justify-center "> 
                  <BiSolidMoviePlay/> <p className="text-sm">Watch Now</p> 
                </div>
            </button>
          </div>
    </div>
         <div>
            {/* je code la partie du titre de details  */}
            <div className="px-4 lg:px-10">
               <div className="flex gap-3 py-5 ">
                 {MovieDetails.genres.map(({id,name}:{id:number,name:string}) => (
                  <p key={id}className="text-sm text-slate-600 " > {name}</p>
                 ))}
               </div>
               <div>
                  <h1 className="font-extrabold mb-5 text-2xl ">{MovieDetails?.title}</h1>
               </div>
               <div className="lg:w-7/12">
                  <p className="text-sm lg:text-xl "> {MovieDetails.overview} </p>
               </div>
               <div className="flex gap-3 py-5">
                <div className="flex gap-2">
                     <p className="flex text-yellow-500 justify-stretch  ">
                 {
                     Array.from({ length: 3 }).map((_,index) => (
                       <IoIosStar key={index} size={14} className="lg:size-5"/>
                    ))
                 }
                 </p>
                 <p className="text-xs lg:text-lg">{MovieDetails.vote_average}</p>
                 </div>
                 <div className="flex text-xs gap-3 lg:text-lg">
                   <p>{MovieDetails.status}</p>
                   <p>{MovieDetails.release_date}</p>
                 </div>
                 </div>
               
            </div>
         </div>
         <div className="flex flex-col px-10 max-md:px-4">
      <h1 className="text-xl  mt-14 mb-8 max-md:my-6 font-extrabold px-4"> Casting </h1>
      <div className="grid grid-cols-3 max-md:grid-cols-2  gap-2">
       {MovieCasting?.cast.map(({id,profile_path,name}:{id:number,profile_path:string,name:string,character:string}) => (
         <div key={id} className="flex  gap-3 py-4 text-center bg-[#272727] rounded-lg truncate p-2  ">
           <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : 'https://picsum.photos/150'} alt={name} className=" object-center  size-24 rounded-xl max-md:size-14"/>
           <div className="max-md:text-xs relative -bottom-5">
             <p>{name}</p>
             {/* <p>{character}</p> */}
           </div>
          </div>))}
      </div>
    </div>
   <div className="relative w-full " >
       <h1 className="text-xl  mt-14 mb-8 max-md:my-6 font-extrabold px-4"> Recommanded movies </h1>
    <div className="relative w-full ">
    {/* Bouton Précédent */}
     <div className="  mr-10 rounded-full bg-black bg-opacity-100 ">
        <button className="prevTrend  absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
           <FaChevronLeft size={20} />
        </button>
      </div>
    <Swipper prevData="prevTrend" nextData ="nextTrend" >
      {
         MovieRecommanded?.map((data) => (
          <SwiperSlide key={data.id} onClick={() => navigate(`/movies/${data.id}`)} className='flex justify-normal pb-10 mx-1 max-md:mx-2 hover:scale-105 transition ease-out duration-200'>
            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" className="h-48 w-72 object-center max-md:h-32  rounded-md hover:scale-95 transition duration-200 ease-out"/>
            <p className="text-lg   max-md:text-sm truncate">{data.title || data.name}</p>
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
      <button className="nextTrend absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
        <FaChevronRight size={20} />
      </button>
      </div>
      </div>
          <div className="py-4 px-7 max-md:text-sm flex font-thin max-md:flex-col justify-around border-t-2 border-t-stone-900 text-white">
            <p>  Netflix 2.0  2024</p>
            <p>By Onek James All right Reserved</p>
      </div>
   </div>
  );
};

export default MovieDetails;
