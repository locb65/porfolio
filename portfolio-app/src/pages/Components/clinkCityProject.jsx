import React, {useState} from 'react'
import homePageImage from '../../utils/imgs/home-page.png'

export const ClinkCityProject = ({projectImageStyle}) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className='flex flex-col justify-center items-center'
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}>
            <h1 className='space-y-0'>
                Clink City
            </h1>
            <div className='w-96'>
                <img className={projectImageStyle} src={homePageImage} alt="img" />
                {showDescription && (
					<div>
                        <p className='indent-5'> Clink City is a web portal designed aroudn the concept of finding local happy hour deals in your area. There is a lack of such a resource online and this is work in progress</p>
                        <p className='indent-5'> Current features include: A welcome page to verify your age, User Authentication, Homepage displaying restaurants and their happy hour information, A user portal for owners to add and manage their restaurants, an account details page allowing users to edit user details, and a dynamically search feature</p>
                        <p className='indent-5 mt-1'>
                        Utilized ReactJS for front-end development, ExpressJS for server-side routing, MongoDB for database management, Cloudinary for image storage and management, Mongoose for object modeling and Netlify for deployment.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

