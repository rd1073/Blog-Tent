import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div>
        
       {/* <div className="w-full flex mt-8 space-x-4">
   
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg" alt="" className="h-full w-full object-cover"/>
    </div>
    
    <div className="flex flex-col w-[65%]">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Post title
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@post username</p>
       <div className="flex space-x-2 text-sm">
       <p>date</p>
       <p>date</p>
       </div>
      </div>
      <p className="text-sm md:text-lg">" ...Read more"</p>
    </div>

    </div>*/}
    <Hero />
    <Footer />
      
    </div>
  )
}

export default Home
