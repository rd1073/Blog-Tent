 
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { FaPenNib } from "react-icons/fa6";
import { useAuth } from '../context/authContext'
import { useNavigate} from "react-router-dom";



const Navbar = () => {
  const [auth, setAuth,
    log, setLog]=useAuth()

    const navigate = useNavigate();


    const handleClick = () => {
      // Replace '/destination' with the path you want to navigate to
      navigate('/create-post');
    };
  
    const handleLogout = () => {

      setAuth({
        ...auth,
        user: null,
        token: "",
      });
        
      sessionStorage.removeItem("userInfo");
      
  
    };

    

  return (
    <><div className="flex items-center justify-between px-6 md:px-[200px] py-4">
              <h1 className="text-xl md:text-2xl font-extrabold"><a href="/">Blog Market</a></h1>


              <form
         
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


        {!auth?.user ? (
                 
                   <>
                   <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-x-4 md:space-y-0 flex-wrap">
                          <a href="/register" style={{ fontSize: '2em' }} className="text-white bg-green-500 px-4 py-2 rounded-md block md:inline-block md:w-auto">
                            Register
                          </a>
                          <a href="/login" style={{ fontSize: '2em' }} className="text-white bg-green-500 px-4 py-2 rounded-md block md:inline-block md:w-auto">
                            Login
                          </a>
                        </div>

                </>
              ) : (
                <>
                 <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-x-4 md:space-y-0 flex-wrap">
                   

                   
                   <button onClick={handleClick} style={{ fontSize: '2em' }} className="text-white bg-green-500 px-4 py-2 rounded-md block md:inline-block md:w-auto">
                   <FaPenNib />


                   </button>
                
           
                   <button style={{ fontSize: '1.2em' }} className="text-white bg-green-500 px-4 py-2 rounded-md block md:inline-block md:w-auto" onClick={handleLogout}>
                          Logout
                        </button>

                        </div>
                </>
              )}
          
              








          </div></>

  )
}

export default Navbar
