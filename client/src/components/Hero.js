import React from 'react'

const Hero = () => {
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-white font-bold text-4xl xl:text-5xl">
                    Discover a new World
                    

                    </h1>
                    
                    <h1 className="text-indigo-400 font-bold text-4xl xl:text-5xl"> Stay Informed,    </h1>
                    <h1 className="text-indigo-400 font-bold text-4xl xl:text-5xl"> Stay Inspired </h1>

                   
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>
  )
}

export default Hero
