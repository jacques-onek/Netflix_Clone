import { Link } from "react-router-dom"
import logo from '../public/logo.png'
import { useContext } from "react"
import { NavBarContext } from "../context/NAvBarcontext"
import { IoClose } from "react-icons/io5";

const NavBarMobile = () => {

    const context = useContext(NavBarContext)
    if (!context) {
        throw new Error("SomeComponent must be used within a <NavBarContextProvider>");
      }
    const [,toggle] = context

  return (
    <div className=" fixed top-0  w-full     flex-col h-screen z-50  " >
      <header className="flex flex-col w-10/12 h-screen  rounded-md  bg-black bg-opacity-90 py-4 px-10 shadow-lg justify-normal transition  ">
        <div >
          <div className="absolute top-0 p-5 right-16">
            <button onClick={toggle}><IoClose size={24} /></button>
          </div>
          <div className="max-md:-left-5">
             <Link to="/">
                <img src={logo} alt="Home page" className="h-10 absolute left-7 " />
             </Link>
          </div>            
        </div>

          <div className="flex flex-col lg:hidden  relative mt-20">
              <ul className="flex flex-col justify-around gap-10 text-2xl font-bold ">
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
       </header>
    </div>
  )
}

export default NavBarMobile
