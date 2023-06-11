import { AboutMe } from "./Components/aboutMe";
import { Projects } from "./Components/projects";
import { ContactMeForm } from "./Components/contactMeForm";

import React from 'react'

export const Home = () => {
  return (
    <div className="flex flex-col items-center w-screen">
        <AboutMe/>
        <Projects className = " flex basis-28 overflow-visible"/>
      
      <div className="m-1 p-1">
           <p className="text-4xl"> Contact Me</p>
            <ContactMeForm/>
      </div>
    </div>
  )
}
