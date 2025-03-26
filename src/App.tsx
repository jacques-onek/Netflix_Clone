import {BrowserRouter,Routes,Route} from "react-router-dom"
import { MovieHub,MovieDetails,SeriesHub,SerieDetails} from "./page"
import Search from "./page/Search"

const App = () => {
  return (

    <BrowserRouter>
       <Routes>
          <Route path="/" element={<MovieHub/>}   />
          <Route path="/movies" element={<MovieHub/>}  >
             <Route  path=":movieId" element={<MovieDetails/>} />
          </Route>
          <Route path="/series" element={<SeriesHub/>}>
             <Route path=":serieId" element={<SerieDetails/>} />
          </Route>
          <Route path="/search" element={<Search/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
