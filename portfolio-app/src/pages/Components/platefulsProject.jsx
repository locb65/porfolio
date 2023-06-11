import React from 'react'
import homePageImage from '../../utils/imgs/Platefuls-home.png'

export const PlatefulsProject = () => {
  return (
    <div>
        <h1 className='space-y-0'>
            Platefuls
        </h1>
        <div className='w-96'>
            <img className='border-2 rounded-xl object-contain max-h-60'  src={homePageImage} alt="img" />
        </div>
    </div>
  )
}

