// import Scroller from "../component/Scroller"
import { Outlet } from "react-router-dom"

const MovieHub = () => {
  return (
    <div>
      {/* <Scroller/> */}
      <Outlet/>
    </div>
  )
}

export default MovieHub
