import React from 'react'
import { HobbiesTemplate } from './hobbiesTemplate'
import MOMBackground from '../../utils/imgs/mission-of-mercy.jpg' 
import HLA from '../../utils/imgs/hfla_fb_logo.png'
import habitat from '../../utils/imgs/ReStore.png'

export const MoreInfoHobbies = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='text-3xl 
            sm:text-4xl 
            md:text-5xl 
            font-bold 
            text-gray-700
            my-6'>
        Volunteer Work
          </div>
          <div className=' text-xl '>
            <ul className=' flex flex-row items-center justify-center '>
              <li className='py-2 mx-3 w-[300px] h-[300px] bg-cover rounded-3xl' style={{backgroundImage: `url(${HLA})`}} >
              </li >
              <li className='py-2 w-[300px] h-[300px] bg-cover rounded-3xl mx-3' style={{backgroundImage: `url(${MOMBackground})` }}>
              </li>
              <li className='py-2 mx-3 w-[300px] h-[300px] bg-cover rounded-3xl' style={{backgroundImage: `url(${habitat})`}}>
              </li>
            </ul>
        </div>
        <div className="text-3xl 
            sm:text-4xl 
            md:text-5xl 
            font-bold 
            text-gray-700
            my-6">Hobbies</div>
      <div className="grid grid-cols-3 gap-4">
        <HobbiesTemplate text="Gaming" />
        <HobbiesTemplate text="Traveling" />
        <HobbiesTemplate text="Exercising" />
        <HobbiesTemplate text="Cooking" />
        <HobbiesTemplate text="Art"/>
      </div>
    </div>
  )
}
