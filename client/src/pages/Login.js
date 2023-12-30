import React from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { useAuth } from '../context/authContext';




const Login = () => {
    const [identifier, setIdentifier] = useState('');  

    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const [ setAuth, setLog ] = useAuth();


      const handleLogin = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        if (!identifier || !password) {
          console.log('Please fill in all the fields');
          return;
        }
    
        try {
            const config = {
              headers: {
                "Content-type": "application/json",
              },
            };
            const res  = await axios.post(
              "http://localhost:5000/auth/loginn",
              {
              
                identifier,
                password,
                
              },
              config
            );

            if (res && res.data.success) {
                setAuth({
                  user: res.data.user,
                  token: res.data.token,
                });
                setLog(true);
              }
            
            console.log("login succesfull");
            sessionStorage.setItem("userInfo", JSON.stringify(res.data));
            
            navigate('/home');
            window.location.reload();

        
    
     
          
    
        } catch (error) {
          console.log(error);
        }
      };



  return (
    <div className="w-full h-screen font-sans bg-cover bg-landscape">
    <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
            <div className="leading-loose">
                <form className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25">
                    <p className="mb-8 text-2xl  text-center text-black font-extrabold">
                        Login
                    </p>
                    <div className="mb-2">
                        <div className=" relative ">
                            <input type="text" id="identifier"
            
                        name="identifier"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)} 
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email or username"/>
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className=" relative ">
                                <input type="password" 
                                name="password"
                                label="Password"
                                 
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password"/>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <button onClick={handleLogin} className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Login
                                </button>
                            </div>
                            
                            <div className="text-center">
                                <a href="/register" className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800">
                                    Create an account
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login
