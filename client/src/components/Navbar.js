import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {
  

    

  return (
    <><div className="flex items-center justify-between px-6 md:px-[200px] py-4">
              <h1 className="text-xl md:text-2xl font-extrabold"><a href="/">Blog Market</a></h1>


              <form
            onSubmit={(e) => e.preventDefault()} 
            className="max-w-md px-4 mx-auto mt-12">
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                />
            </div>
        </form>
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








          </div></>

  )
}

export default Navbar
