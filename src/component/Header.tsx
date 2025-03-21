



const Header = () => {
  return (
    <div className="w-screen  top-2 h-[95vh] pl-14 bg-cover bg-center bg_header -z-10 max-md:auto">
       <div className="w-6/12 flex flex-col pt-44 px-10 font-Helvetica mb-14 max-md:w-screen max-lg:w-screen max-md:px-0 relative -left-8 max-md:pt-32">
         <h1 className="text-6xl  font-black text-[#e40813] max-md:text-5xl max-md:pr-5 max-lg:text-6xl ">The Perfect Touch for Your Hobbies !</h1>
       </div>
       <div className="px-10 max-md:px-0 w-6/12 ml-10 max-md:w-full relative -left-16 max-lg:w-full overflow-x-auto">
      <p className="text-white w-full mb-14  max-md:text-xl max-md:mb-10 max-lg:text-3xl font-thin ">
         Stream your favorite movies, series, and originals all in one place. 
         Explore trending content, discover hidden gems, and create your personalized watchlist. 
         Your entertainment, your way
       </p>
       <button className="px-7 py-3 bg-[#e40813] outline-none transition duration-200 hover:bg-red-700 text-white rounded-full max-lg:w-[30rem] max-lg:py-8 max-lg:text-3xl max-md:w-auto animate-pulse max-md:py-4 max-md:text-xl"> Get Started</button>
       </div>
      
    </div>
  )
}

export default Header