import React from 'react'
import homePageImage from '../../utils/imgs/home-page.png'

export const ClinkCityProject = () => {
  return (
    <div>
        <h1 className='space-y-0'>
            Clink City
        </h1>
        <div className='w-96'>
            <img className='border-2 rounded-xl object-contain w-96'  src={homePageImage} alt="img" />
        </div>
    </div>
  )
}

