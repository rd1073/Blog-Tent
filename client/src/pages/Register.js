import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation




const Register = () => {
    const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();


  const handleRegister = async () => {
    if (!username || !password) {
      console.log("please fill all the fields");
       return;
    }
    if (password!=confirmPassword) {
        console.log("passwords do not match");
         return;
      }
    
     
     try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      
      const { data } = await axios.post(
        "http://localhost:5000/auth/signup",
        {
          username,
          password,
          email,
          firstname,
          lastname,
          
        },
        config
      );
      console.log(data);
      console.log("regitration succesful");
      //sessionStorage.setItem("userInfo", JSON.stringify(data));
      
      navigate('/login');
    } catch (error) {
      console.log(error);
     }




  };



  return (
    
    <div className="w-full h-screen font-sans bg-cover bg-landscape">
      <div className="container flex items-center justify-center flex-1 h-full mx-auto">
        <div className="w-full max-w-lg">
          <div className="leading-loose">
            <form
              className="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25"
              >
              <p className="mb-8 text-2xl text-center text-black font-extrabold">
                Register
              </p>

              <div className="mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="login-with-bg-email"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="login-with-bg-firstname"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="login-with-bg-lastname"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <div className="relative">
                  <input
                    type="text"
                    id="login-with-bg-username"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <div className="relative">
                  <input
                    type="password"
                    id="login-with-bg-password"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-2">
                <div className="relative">
                  <input
                    type="password"
                    id="login-with-bg-confirm-password"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={handleRegister}
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Register
                </button>
              </div>

              <div className="text-center">
                <a
                  href="/login"
                  className="right-0 inline-block text-sm font-light align-baseline text-500 hover:text-gray-800"
                >
                  Have an account? Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
