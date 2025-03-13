import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home,MovieHub,MovieDetails,TvHub,ChannelDetails,SeriesHub,SerieDetails} from "./page"

const App = () => {
  return (

    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<MovieHub/>}>
             <Route path="/movies:movieId" element={<MovieDetails/>} />
          </Route>
          <Route path="/tv" element={<TvHub/>}>
             <Route path="/tvId" element={<ChannelDetails/>} />
          </Route>
          <Route path="/series" element={<SeriesHub/>}>
             <Route path="/movies:serieId" element={<SerieDetails/>} />
          </Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
