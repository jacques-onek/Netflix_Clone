import { Link } from "react-router-dom"
import logo from '../public/logo.png'
import { useContext} from "react"
import { LuAlignRight } from "react-icons/lu";
import NavBarMobile from "./NavBarMobile";
import { NavBarContext } from "../context/NAvBarcontext";
import { IoSearchOutline } from "react-icons/io5";
import { TiDelete } from "react-icons/ti";

const NavBar = () => {

         const context = useContext (NavBarContext)
         if (!context) {
          throw new Error("SomeComponent must be used within a <NavBarContextProvider>");
        }
          const {isOpen,toggle,search,handleSearch} = context

          const handleForsearch = (query:string) => {
            handleSearch(query)
          }

  return (
    <div>
      
      {
        isOpen ? <NavBarMobile/> : 
      
    <div className=" h-20 relative top-0 w-full shadow-lg py-4  flex justify-around z-50 bg-black bg-opacity-70 ">
      <header className="flex w-full justify-around ">

          <div className="max-md:-left-5">
             <Link to="/">
                <img src={logo} alt="Home page" className="h-12 max-md:h-10 max-md:absolute left-7 " />
             </Link>
          </div>
          {
             <div className="flex h-10 justify-around  rounded-xl shadow-lg bg-[#272727] max-md:hidden ">
            <IoSearchOutline className="size-6  mt-2" />
             <input type="text" value={search} onChange={(e) => handleForsearch(e.target.value) } placeholder="Search something" className="w-3/5 h-auto outline-none focus:cursor-pointer relative -left-2 bg-transparent hover:outline-none cursor-pointer mr-4" />
             {search ? (<button onClick={() => handleSearch("")}><TiDelete className="size-6  mr-2" /></button>) : null}
          </div>
          }
          <div className="text-3xl font-bold text-white lg:hidden md:hidden">
            <Link to="/search">
              <IoSearchOutline /> 
            </Link>
          </div>
          <div className="block max-lg:hidden ">
              <ul className="flex justify-end gap-20 max-xl:gap-10 ">
                <Link to='/movies'>
                  <li className="hover:text-red-800 transition duration-200">Movies</li>
                </Link>
                <Link to='/Series'>
                  <li className="hover:text-red-800 transition duration-200">Series/Tv</li>
                </Link>
                <Link to='/auth/login'>
                  <li className="hover:text-red-800 transition duration-200">Sign-in</li>
                </Link>
                <Link to='/auth/sign_up'>
                  <li className="hover:text-red-800 transition duration-200">Sign-up</li>
                </Link>
              </ul>
          </div>
          <div className=" text-3xl font-bold text-white lg:hidden absolute right-4 ">
             <button onClick={toggle}><LuAlignRight /></button>
          </div>
       </header>
     </div>
     }
    </div>
  )
}

export default NavBar
