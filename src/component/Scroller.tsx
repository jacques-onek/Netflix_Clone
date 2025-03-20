import Card from "./cards/card"
import CardTrending from "./cards/CardTrending"
import CardTv from "./cards/CardTv"
import SkeletonSlider from "./SkeletonSlider"
import { useMediaData } from "../page/queries/UseMultipleQueries"



const Scroller = () => {

  const { isLoading, isError } = useMediaData();
    


  return (
    <div className="relative h-auto flex flex-col px-10 max-md:px-4">


        {/* slider pour les tranding  */}
  {
    isLoading ? <SkeletonSlider/> :<CardTrending />
  }

  {/* slider pour les films  */}
  {
     isLoading ? <SkeletonSlider/> : <Card />
          
  }

{/* slider section series/tv   */}

  {
    isLoading ? <SkeletonSlider/> :

      <div>
         <h1 className="text-2xl  mt-14 mb-8 max-md:my-6"> Popular Series/tv </h1>
            <CardTv />
      </div>
  }

  {
    isError && (
      <div>
         Network error, check yours network 
      </div>
    )
  }
    </div>
  )
}

export default Scroller
