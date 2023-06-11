import React from 'react'
import { ClinkCityProject } from './clinkCityProject'
import { PlatefulsProject } from './platefulsProject'
import { FFXAPIProejct } from './ffApiProject'

export const Projects = () => {
  return (
    <div>
        <h1>Projects</h1>
        <div className='flex flex-row project-container border-2 p-2 rounded-md overflow-visible shadow-inner space-x-1' >
            <ClinkCityProject/>
            <PlatefulsProject/>
            <FFXAPIProejct/>
        </div>
    </div>
  )
}
