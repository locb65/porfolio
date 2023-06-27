import React from 'react'
import profilePic from '../../utils/imgs/Headshot.jpg'
import { Link } from 'react-router-dom'
import './styles.css'

export const AboutMe = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen w-full'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-700'>About Me</h1>
            <div className='flex flex-col sm:flex-row items-center content-center max-h-3/6 w-11/12'>
            <div className='flex flex-col items-center w-full sm:w-2/6 mb-4 sm:mb-0 sm:mr-6 sm:border-r-2 sm:border-b-0 border-b-2 border-slate-500 p-4'>
                <img src={profilePic} alt="mePic" className='max-h-60 w-auto h-auto mr-6 rounded-3xl sm:max-h-96 md:max-h-80 sm:rounded-xl'/>
            </div>
            <div className='flex text-base pl-4 ml-4 mr-4 sm:mr-8 md:mr-12 lg:mr-20 sm:text-lg max-h-80 w-full sm:w-4/6 overflow-y-auto '>
                <p >I am a software developer with a background in medical sciences, which enables me to approach 
                software development with a unique blend of analytical thinking, problem-solving skills, and a deep understanding of data management and visualization. 
                I excel at leveraging my scientific knowledge to create efficient and innovative software solutions. With a strong attention to detail and a passion 
                for user-centric design, I thrive in collaborating with cross-functional teams to create intuitive applications tailored to users' needs.
                My experience in working with large datasets equips me with the skills to ensure data accuracy and maintain strict data privacy and security standards. 
                I am continuously expanding my technical skills and staying up-to-date with the latest advancements in software development. 
                I believe in the transformative power of technology to drive positive change across various industries. 
                By applying my background in medical sciences to software development, I aim to create impactful solutions that enhance efficiency, accuracy, and outcomes.</p>
            </div>
            </div>
            <div className='relative ' >
            <div className='p-8 relative '>
            <Link to='/more-info' className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium  rounded-lg shadow-2xl group ">
                <span className="absolute top-0 left-0 w-32 h-32 -mt-8 -ml-2 sm:w-40 sm:h-40 sm:-mt-10 sm:-ml-3 transition-all duration-700 bg-red-300 rounded-full blur-md ease "></span>
                <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease ">
                    <span className="absolute bottom-0 left-0 w-16 h-16 -ml-6 sm:w-24 sm:h-24 sm:-ml-10 bg-blue-300 rounded-full blur-md "></span>
                    <span className="absolute bottom-0 right-0 w-16 h-16 -mr-6 sm:w-24 sm:h-24 sm:-mr-10 bg-green-300 rounded-full blur-md "></span>
                </span>
                <span className="relative text-slate-600 ">More Info</span>
            </Link>
            </div>
            </div>
        </div>
    )
}
