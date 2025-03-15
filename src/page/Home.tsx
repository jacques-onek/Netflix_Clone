import NavBar from "../component/NavBar"
import Header from "../component/Header"
import { useQueries } from "@tanstack/react-query"
import {fetchPopularTVShows,fetchPopularMovies} from '../service/tmdb'
  import Scroller from "../component/Scroller"

const Home = () => {

  const results = useQueries({
    queries:[
      // fetching popular movies 
      {
        queryKey:["popularMovie"],
        queryFn:fetchPopularMovies
      },
      {
        queryKey:["popularTv"],
        queryFn:fetchPopularTVShows
      }
    ]
  })
console.log(results[0].data)
console.log(results[1].data)
  return (
    <div>
      {/* header section  */}
       <div>
         <Header/>
         <NavBar/>
       </div>
       {/* main section  */}
       <div>
         <Scroller data={results} />
       </div>
       
    </div>
  )
}

export default Home
