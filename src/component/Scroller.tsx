import Card from "./cards/card"
import CardTv from "./CardTv"
import SkeletonSlider from "./SkeletonSlider"



const Scroller = ({data}) => {


    const [movies,tvs] = data


  return (
    <div className="relative h-auto flex flex-col px-10 max-md:px-4">


        {
         movies.isLoading ? <SkeletonSlider/> :

            <div>
                     <h1 className="text-3xl  my-14 max-md:my-6"> Popular Movies </h1>
                     <Card movie={movies.data?.results || []}/>
           </div> 
        }

{/* slider section series/tv   */}

  {
    movies.isLoading ? <SkeletonSlider/> :

      <div>
         <h1 className="text-3xl  my-14 max-md:my-2"> Popular Series/tv </h1>
            <CardTv tv={tvs.data?.results || []}/>
      </div>
  }

    </div>
  )
}

export default Scroller
