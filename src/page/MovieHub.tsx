// import Scroller from "../component/Scroller"
import { Outlet, useParams } from "react-router-dom"
import Home from "./Home"

const MovieHub = () => {

  const {movieId} = useParams()
  return (
    <div>
      {
        movieId ? <Outlet/> :<Home/>
      }  
    </div>
  )
}

export default MovieHub
