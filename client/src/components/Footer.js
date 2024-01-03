import React from 'react'
import { FaGithub } from "react-icons/fa";
  
const Footer = () => {
  return (
    
     
   
    <div className="flex flex-col mx-3 bg-white rounded-lg">
    <div className="w-full draggable">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col items-center w-full my-10"> {/* Adjusted my-20 to my-10 */}
          <span className="mb-4"> {/* Adjusted mb-8 to mb-4 */}
            <h1 className="text-xl md:text-2xl font-extrabold">Blog Market</h1>
          </span>
          <div className="flex flex-col items-center gap-4 mb-4"> {/* Adjusted gap-6 to gap-4 and mb-8 to mb-4 */}
            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 gap-y-2 lg:flex-nowrap text-dark-grey-900"> {/* Adjusted gap-5 to gap-4, lg:gap-12 to lg:gap-8, and gap-y-3 to gap-y-2 */}
              <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">Resources</a>
              <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">Help</a>
              <a href="javascript:void(0)" className="text-gray-600 hover:text-gray-900">Terms</a>
            </div>
            <div className="flex items-center gap-6"> {/* Adjusted gap-8 to gap-6 */}
              <a href="javascript:void(0)" className="text-grey-700 hover:text-grey-900">
                <FaGithub />
              </a>
              <a href="javascript:void(0)" className="text-grey-700 hover:text-grey-900">
                <FaGithub />
              </a>
              <a href="javascript:void(0)" className="text-grey-700 hover:text-grey-900">
                <FaGithub />
              </a>
              <a href="javascript:void(0)" className="text-grey-700 hover:text-grey-900">
                <FaGithub />
              </a>
              <a href="javascript:void(0)" className="text-grey-700 hover:text-grey-900">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
         
     
 

  )
}

export default Footer
