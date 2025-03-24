import { Link } from "react-router-dom"
import logo from '../public/logo.png'
import { useContext} from "react"
import { LuAlignRight } from "react-icons/lu";
import NavBarMobile from "./NavBarMobile";
import { NavBarContext } from "../context/NAvBarcontext";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {

         const context = useContext (NavBarContext)
         if (!context) {
          throw new Error("SomeComponent must be used within a <NavBarContextProvider>");
        }
         const [isOpen,toggle] = context

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
          <div className="text-3xl font-bold text-white">
            <Link to="/search">
              <IoSearchOutline />
            </Link>
          </div>
          <div className="block max-md:hidden ">
              <ul className="flex justify-end gap-20 ">
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
