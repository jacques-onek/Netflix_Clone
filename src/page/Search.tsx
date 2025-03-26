import { useState } from "react"
import { fetchSearchResults,fetchTVSearchResults } from "../service/tmdb"
import { useQuery } from "@tanstack/react-query"
import { TiDelete } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Swipper from "../component/cards/Swipper";
import { SwiperSlide } from "swiper/react";
import { IoIosStar } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Search = ({sear}:{sear:string}) => {


const [query,setquery] = useState("")
 const {data:searchMoviesResults} = useQuery({
   queryKey:["searchMovie",query],
   queryFn:() => fetchSearchResults(sear ? sear : query)
 })

 const {data:searchTvResults} = useQuery({
    queryKey:["searchSerie",query],
    queryFn:() => fetchTVSearchResults(sear ? sear : query)
  })

 const navigate = useNavigate()

  return (
    <div className="relative h-auto flex flex-col px-10 max-md:px-4">
        <div className="flex h-14  px-4 lg:hidden">
          <div className="flex h-10 justify-around my-4 rounded-xl shadow-lg bg-[#272727]">
            <IoSearchOutline className="size-6  mt-2" />
             <input type="text" value={query} onChange={(e) => setquery(e.target.value)} placeholder="Search something" className="w-3/5 h-auto outline-none focus:cursor-pointer  relative -left-2 bg-transparent hover:outline-none cursor-pointer mr-4" />
             {query ? (<button onClick={() => setquery("")}><TiDelete className="size-6  mr-2" /></button>) : null}
          </div> 
           <Link to="/"><p className="border-b-2 ml-2 relative -bottom-5">annuler</p></Link>           
        </div>
        {
            searchMoviesResults && searchMoviesResults.length ? (
               
                <div>
                  <h1 className="my-8 text-2xl font-bold"> Search result For :  " {sear ? sear : query} "</h1>
              <div className="relative w-full ">
                <h1 className="text-2xl  mt-14 mb-8 ml-6 max-md:my-6 font-extrabold"> Films  </h1>     
                    {/* Bouton Précédent */}
                 <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                    <button className="searMv absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                     <FaChevronLeft size={20} />
                    </button>
                  </div>
            <Swipper prevData="searMv" nextData ="searNext">
             {
               searchMoviesResults.map((data) => (
                  
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
                <button className="searNext absolute  -right-10 top-24 max-md:hidden -translate-y-1/3 bg-black bg-opacity-50 text-red-700 p-2 rounded-full z-10">
                  <FaChevronRight size={20} />
                </button>
            </div>
         </div>
            ) : null
        }

        {/* resultats de recherche pour les series  */}

        {searchTvResults && searchTvResults.length ? (
            
            <div>
            <h1 className="text-2xl  mt-14 mb-8 ml-6 max-md:my-6 font-extrabold"> Series  </h1>     
          <div className="relative w-full ">
                {/* Bouton Précédent */}
             <div className="  mr-10 rounded-full bg-black bg-opacity-100">
                <button className="prevTop absolute max-md:hidden -left-10 top-24 -translate-y-1/3 bg-black bg-opacity-50  text-red-700 p-2 rounded-full z-10">
                 <FaChevronLeft size={20} />
                </button>
              </div>
        <Swipper prevData="prevTop" nextData ="nextTop ">
         {
           searchTvResults.map((data) => (
              
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
        ) : null}

        {
            searchMoviesResults?.length === 0 && searchTvResults?.length === 0 && query !== "" && (
             <div className="max-md:h-[80vh] flex flex-col justify-center items-center ">
                 <p className="text-center text-gray-500">Aucun film disponible</p>
             </div>   
            )
            
        }
    </div>
  )
}

export default Search
