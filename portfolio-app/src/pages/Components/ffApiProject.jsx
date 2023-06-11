import React from 'react'
import homePageImage from '../../utils/imgs/ffx-api.png'

export const FFXAPIProejct = () => {
  return (
    <div>
        <h1 className='space-y-0'>
            Final Fantasy API
        </h1>
        <div className='w-96'>
            <img className='border-2 rounded-xl object-contain max-h-60'  src={homePageImage} alt="img" />
        </div>
    </div>
  )
}

