import React from 'react'
import { ClinkCityProject } from './clinkCityProject'
import { PlatefulsProject } from './platefulsProject'
import { FFXAPIProject } from './ffApiProject'
import { TriviaProject } from './triviaGame'
import './styles.css'

export const Projects = () => {
    const projectImageStyle = 'border-2 rounded-xl object-contain h-60 object-fill'
    return (
        <div className="App 
        flex 
        flex-col 
        justify-center 
        items-center
        bg-gradient-to-b from-white to-blue-300 
        h-screen
        w-screen">

        <div className='flex 
        flex-col 
        items-center 
        px-4 
        sm:px-8 
        md:px-12 
        lg:px-20 
        h-full'>

            <h1 className='text-3xl 
            sm:text-4xl 
            md:text-5xl 
            font-bold 
            text-gray-700
            mb-6'>Projects</h1>

            <div className='project-container 
            flex flex-col 
            sm:flex-row 
            border-2 
            border-slate-400
            p-2 
            pb-6
            rounded-md 
            overflow-visible 
            shadow-inner 
            shadow-slate-500
            space-x-1 
            sm:overflow-x-auto 
            overflow-y-auto 
            max-h-screen 
            max-w-screen-lg'>
                <ClinkCityProject projectImageStyle={projectImageStyle}/>
                <PlatefulsProject projectImageStyle={projectImageStyle}/>
                <FFXAPIProject projectImageStyle={projectImageStyle}/>
                <TriviaProject projectImageStyle={projectImageStyle}/>
            </div>
        </div>
        </div>
    )
}
