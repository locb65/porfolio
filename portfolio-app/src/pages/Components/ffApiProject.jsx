import React, {useState} from 'react'
import homePageImage from '../../utils/imgs/ffx-api.png'

export const FFXAPIProject = ({projectImageStyle}) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='space-y-0 text-lg font-bold text-gray-700'>
                Final Fantasy API
            </h1>
            <div className='w-96'>
                <img className={projectImageStyle} src={homePageImage} alt="img"
                        onMouseEnter={() => setShowDescription(true)}
                        onMouseLeave={() => setShowDescription(false)} />
                {showDescription && (
					<div>
                        <p className='indent-5'> A simple API created for the Final Fantasy Game Series. This game series has been my favorite since I was a child and this will serve as a database you can add to. Features include: Adding Characters, Generating 1 on 1 match ups, Generating teams of 3.</p>
                        <p className='indent-5 mt-1'>
                        Utilzied ExpressJS, Mongoose for object modeling, and MongoDB for data storage to generate teams of random characters from existing API data.
                        </p>
                    </div> 
                )}
            </div>
        </div>
    )
}

