import React from 'react'
import homePageImage from '../../utils/imgs/home-page.png'

export const ClinkCityProject = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='space-y-0'>
            Clink City
        </h1>
        <div className='w-96'>
            <img className='border-2 rounded-xl object-contain max-h-60'  src={homePageImage} alt="img" />
        </div>
    </div>
  )
}

