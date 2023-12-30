import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
    <h1 className="text-lg md:text-xl font-extrabold"><a href="/">Blog Market</a></h1>

    <div className="flex justify-center items-center space-x-0">
        <p className="cursor-pointer"><BsSearch/></p>
        <input className="outline-none px-3" placeholder="Search a post" type="text"/>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-x-4 md:space-y-0 flex-wrap">
    <h3 className="mb-2 md:mb-0">
        <a href="/register" className="text-white bg-blue-500 px-4 py-2 rounded-md block md:inline-block md:w-auto">
            Register
        </a>
    </h3>

    <h3>
        <a href="/login" className="text-white bg-green-500 px-4 py-2 rounded-md block md:inline-block md:w-auto">
            Login
        </a>
    </h3>
</div>



     
    
     

    
</div>

  )
}

export default Navbar
