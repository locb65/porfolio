import React from 'react'
import profilePic from '../../utils/imgs/me.jpg'

export const AboutMe = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-4 sm:mx-8 md:mx-12 lg:mx-20 px-4 sm:px-8 md:px-12 lg:px-20 h-screen w-screen'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-700'>About Me</h1>
            <div className='flex flex-col sm:flex-row items-center'>
            <div className='w-full sm:w-2/6 mb-4 sm:mb-0 sm:mr-6 sm:border-r-2 sm:border-b-0 border-b-2 border-slate-400 p-4'>
                <img src={profilePic} alt="mePic" className='max-h-96 mr-6 rounded-3xl'/>
            </div>
            <p className='felxtext-base sm:text-lg w-full sm:w-4/6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus magni esse temporibus autem labore iusto minima hic nihil, sequi tempora sit animi veniam asperiores eligendi adipisci! Atque ea error est.</p>
            </div>
            <div>
            <a href="#_" class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium  rounded-lg shadow-2xl group">
                <span class="absolute top-0 left-0 w-32 h-32 -mt-8 -ml-2 sm:w-40 sm:h-40 sm:-mt-10 sm:-ml-3 transition-all duration-700 bg-red-300 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                    <span class="absolute bottom-0 left-0 w-16 h-16 -ml-6 sm:w-24 sm:h-24 sm:-ml-10 bg-blue-300 rounded-full blur-md"></span>
                    <span class="absolute bottom-0 right-0 w-16 h-16 -mr-6 sm:w-24 sm:h-24 sm:-mr-10 bg-green-300 rounded-full blur-md"></span>
                </span>
                <span class="relative text-slate-600">More Info</span>
            </a>
            </div>
        </div>
    )
}
