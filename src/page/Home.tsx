import NavBar from "../component/NavBar"
import Header from "../component/Header"
import {  useQuery } from "@tanstack/react-query"
import {fetchMovieTrailer} from '../service/tmdb'
import Scroller from "../component/Scroller"
import ReactPlayer from 'react-player'
import Footer from "../component/Footer"
import { NavBarContextProvider } from "../context/NAvBarcontext"

const Home = () => {

  
  const { data: trailerKey } = useQuery(
    {
      queryKey:["video",550],
      queryFn:() => fetchMovieTrailer(550),
      staleTime: 1000 * 60 * 5, 
    }
  )

  return (
    <div className="overflow-x-hidden">
      {/* header section  */}
       <NavBarContextProvider>
         <Header/>
         <NavBar/>
       </NavBarContextProvider>
       {/* main section  */}
       <div>
         <Scroller />
       </div>
       {/* movie player */}

        <div className="flex flex-col w-screen justify-center items-center">
        {

         trailerKey ?         
          
          <ReactPlayer
           url={trailerKey}
           playing={true}
           muted={true}
           controls
           width="90%"
           height="400px"
           className="rounded-2xl shadow-lg"
           light={true}
           config={{
            youtube: {
              playerVars: {
                autoplay: 1, // Activer autoplay
                modestbranding: 1, // Enlever le logo YouTube
                rel: 0, // Désactiver les vidéos suggérées
                showinfo: 0, // Enlever les infos du propriétaire
                iv_load_policy: 3, // Enlever les annotations
              },
            },
          }}
          /> :
          <div>
            <h1>Erreur d'affichage films </h1> 
          </div>
        }

        </div>
       <Footer/>
    </div>
  )
}

export default Home
