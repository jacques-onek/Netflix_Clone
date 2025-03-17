import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className=" h-20 absolute top-0 w-full shadow-lg py-4 flex justify-around z-50 bg-black bg-opacity-70 ">
      <header className="flex w-full justify-around ">
          <div className="max-md:-left-5">
             <Link to="/">
                <img src="public/logo.png" alt="Home page" className="h-12 max-md:h-10 max-md:absolute left-7 " />
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
       </header>
    </div>
  )
}

export default NavBar
