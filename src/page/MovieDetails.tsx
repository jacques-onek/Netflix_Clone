import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../service/tmdb";
import { useEffect, useState } from "react";
import SkeletonSlider from "../component/SkeletonSlider";
import { BiSolidMoviePlay } from "react-icons/bi";

const MovieDetails = () => {
  const { movieId } = useParams();

  const {data:MovieDetails,isLoading,isError} = useQuery({
    queryKey:["moviedetails",movieId],
    queryFn:() => fetchMovieDetails(movieId!)
  })

 const [bg,setbg] = useState("")

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
  return (
    <div>
      <div className="w-screen flex flex-col justify-between max-md:gap-32 bg-no-repeat max-md:h-[40vh]  top-2 h-[95vh] pl-14 bg-gradient-to-t from-black via-black to-transparent bg-cover  bg-center bg- -z-10 max-md:auto" style={{backgroundImage:`url(${bg})`}}>
        <div className="flex flex-col justify-between">

       <div className="w-6/12 flex flex-col pt-44 max-md:pt-5 px-auto   mb-14 max-md:w-screen max-lg:w-screen max-md:px-0 relative -left-8 ">
         <h1 className="text-6xl  font-black text-[#e40813] max-md:text-4xl max-md:pr-5 max-lg:text-6xl ">{MovieDetails?.title}</h1>
       </div>
       <div className="px-10 max-md:px-0 w-6/12 ml-10 max-md:w-full max-md:h-full  relative -left-16 bottom- -top-36 max-lg:w-full overflow-x-auto">
       <button className="px-20 py-3 bg-[#e40813] z-50 max-md:py-2 outline-none transition duration-200 hover:bg-red-700 text-white rounded-full max-lg:w-[30rem] max-lg:py-8 max-lg:text-3xl max-md:w-auto  max-md:px-4 max-md:text-xl"> 
        <div className="flex  gap-4 justify-center "> 
        <BiSolidMoviePlay/> <p>Watch Now</p> 
        </div>
      </button>
       </div>
      
        </div>
    </div>
      <h2>Détails du film {movieId}</h2>
         
      </div>
  );
};

export default MovieDetails;
