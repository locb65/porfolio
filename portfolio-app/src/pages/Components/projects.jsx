import React from 'react'
import { ClinkCityProject } from './clinkCityProject'
import { PlatefulsProject } from './platefulsProject'
import { FFXAPIProejct } from './ffApiProject'
import './styles.css'

export const Projects = () => {
  return (
    <div>
        <h1>Projects</h1>
        <div className='project-container flex flex-row border-2 p-2 rounded-md overflow-visible shadow-inner space-x-1 overflow-x-auto max-w-screen-lg' >
            <ClinkCityProject/>
            <PlatefulsProject/>
            <FFXAPIProejct/>
        </div>
    </div>
  )
}
