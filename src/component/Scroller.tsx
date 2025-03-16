import Card from "./cards/card"
import CardTrending from "./cards/CardTrending"
import CardTv from "./cards/CardTv"
import SkeletonSlider from "./SkeletonSlider"



const Scroller = ({data}) => {


    const [movies,tvs,trending] = data


  return (
    <div className="relative h-auto flex flex-col px-10 max-md:px-4">


        {
         movies.isLoading ? <SkeletonSlider/> :

            <div>
                     <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> Popular Movies </h1>
                     <Card movie={movies.data?.results || []}/>
           </div> 
        }

{/* slider section series/tv   */}

  {
    tvs.isLoading ? <SkeletonSlider/> :

      <div>
         <h1 className="text-2xl  mt-10 mb-8 max-md:my-2"> Popular Series/tv </h1>
            <CardTv tv={tvs.data?.results || []}/>
      </div>
  }

  {/* slider pour les tranding  */}
  {
    trending.isLoading ? <SkeletonSlider/> :

      <div>
         <h1 className="text-2xl  mt-10 mb-8 max-md:my-2"> Trending this week </h1>
            <CardTrending trend={trending.data?.results || []}/>
      </div>
  }
    </div>
  )
}

export default Scroller
