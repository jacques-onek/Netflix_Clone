



const Header = () => {
  return (
    <div className="w-[95vw] h-[85vh] pl-14 bg-cover bg-center bg_header">
       <div className="w-6/12 flex flex-col pt-28 px-10 font-Helvetica mb-14">
         <h1 className="text-5xl  font-black text-red-600">The Perfect Touch for Your Hobbies !</h1>
       </div>
       <div className="px-10 w-6/12">
         <p className="text-white w-full mb-14">
       Stream your favorite movies, series, and originals all in one place. 
       Explore trending content, discover hidden gems, and create your personalized watchlist. 
       Your entertainment, your way
       </p>
       <button className="px-7 py-3 bg-red-600 text-white rounded-md"> Watch Now</button>
       </div>
      
    </div>
  )
}

export default Header