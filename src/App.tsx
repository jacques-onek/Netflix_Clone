import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home,MovieHub,MovieDetails,TvHub,ChannelDetails,SeriesHub,SerieDetails} from "./page"

const App = () => {
  return (

    <BrowserRouter>
       <Routes>
          <Route element={<Home/>} path="/"  />
          <Route element={<MovieHub/>} path="/movies" >
             <Route element={<MovieDetails/>} path="/movies:movieId"  />
          </Route>
          <Route path="/tv" element={<TvHub/>}>
             <Route path="/tvId" element={<ChannelDetails/>} />
          </Route>
          <Route path="/series" element={<SeriesHub/>}>
             <Route path="/series:serieId" element={<SerieDetails/>} />
          </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
