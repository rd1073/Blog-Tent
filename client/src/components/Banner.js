import React from 'react';
import { useAuth } from '../context/authContext'
import { useNavigate} from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";





const Banner = () => {
    const [auth, setAuth]=useAuth();
       


  return (

    <>
      {auth?.user ? (
        <div className="bg-indigo-600">
          <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8">
            <a href="/profile">
            <p className="font-medium">
              Welcome {auth.user}  <FaArrowRightToBracket  className="inline-block" />


              </p>
             
              
            
              </a>
            
          </div>
        </div>
           ) : (
            <div className="bg-indigo-600">
          <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8">
            <p className="font-medium">
              Welcome !
               
           
            </p>
          </div>
        </div>
           )}
 
    </>
)}

export default Banner
