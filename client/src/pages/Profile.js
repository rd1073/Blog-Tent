import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/authContext'


const Profile = () => {
    const [auth, setAuth]=useAuth();
    const [myblogs, setMyblogs] = useState([]);



    useEffect(() => {
        // Fetch posts associated with the authenticated user (using auth.id)
        
    
        fetchUserPosts();
      }, );

      const fetchUserPosts = async () => {
        try {
          const response = await fetch(`http://localhost:5000/blog/my-blogs?user=${auth.user}`);
          const data = await response.json();
          setMyblogs(data);
        } catch (error) {
          console.error('Error fetching posts:', error.message);
        }
      };

  return (
    <><div className="  flex items justify-center p-2">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">

              <div className="relative">
                  <img src="https://placekitten.com/500/150" alt="Banner Profile" className="w-full rounded-t-lg" />
                  <img src="https://placekitten.com/150/150" alt="Profile Picture" className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white" />
              </div>
              <br />
              <br />
              <div className="flex items-center mt-4">
                  <h2 className="text-xl font-bold text-gray-800">John Doe</h2>

              </div>



              <div className="flex flex-col items-center mt-4 space-x-4">
                  <a href="#" className="text-blue-500 hover:underline"> Twitter </a>
                  <a href="#" className="text-blue-500 hover:underline"> GitHub </a>
                  <a href="#" className="text-blue-500 hover:underline"> LinkedIn </a>
              </div>


              <hr className="my-4 border-t border-gray-300" />

              {/* Stats */}
              <div className="flex justify-between text-gray-600 mx-2">
                  <div className="text-center">
                      <span className="block font-bold text-lg">1.5k</span>
                      <span className="text-xs">Followers</span>
                  </div>
                  <div className="text-center">
                      <span className="block font-bold text-lg">120</span>
                      <span className="text-xs">Following</span>
                  </div>
                  <div className="text-center">
                      <span className="block font-bold text-lg">350</span>
                      <span className="text-xs">Posts</span>
                  </div>
              </div>
              <br />
              <br />
              <h2>Write something about yourself here!!</h2>
              <br />
              <button type="button" class="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                  Edit
              </button>

          </div>

      </div><div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">






              {/* Blog posts */}
              {myblogs.map((blog, index) => (
                  <div key={index} className="lg:flex">
                      <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={`http://localhost:5000/Images/${blog.image}`} alt={blog.title} />

                      <div className="flex flex-col justify-between py-6 lg:mx-6">
                          <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white">
                              {blog.title}
                          </a>


                          <span className="text-sm text-gray-500 dark:text-gray-300">Updated: {blog.createdAt}</span>
                          <p className="text-gray-600 dark:text-gray-400">Author: {blog.author}</p>


                      </div>
                  </div>
              ))}

          </div></>
    
    
  );
};

export default Profile;