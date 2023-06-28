import React from 'react'
import { MoreInfoEducation} from './Components/moreInfoEducationExperience'
import { MoreInfoStatement } from './Components/moreInfoStatement'
import { MoreInfoHobbies } from './Components/moreInfoHobbies'

export const MoreInfo = () => {
    return (
        <div className='min-h-screen'>
        <div>
            <MoreInfoStatement/>
        </div>
        <div>
            <MoreInfoEducation/>
        </div>
        <div>
            <MoreInfoHobbies/>
        </div>
        </div>
    )
}
