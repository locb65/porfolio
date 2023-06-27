import React, {useState} from 'react'
import homePageImage from '../../utils/imgs/Platefuls-home.png'


export const PlatefulsProject = ({projectImageStyle}) => {
	const [showDescription, setShowDescription] =useState(false);
	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='space-y-0 text-lg font-bold text-gray-700'>
				Platefuls
			</h1>
			<div className='w-96'>
				<img className={projectImageStyle}  src={homePageImage} alt="img" 
						onMouseEnter={() => setShowDescription(true)}
						onMouseLeave={() => setShowDescription(false)}/>
				{showDescription && (
					<div>
						<p className='indent-5'> An Instagram-like app for cooking and recipes. Features include: View Recipes, Adding new Recipes, Search Feature, Creating a Grocery list for a Recipe.</p>
						<p className='indent-5 mt-1'>
						Utilized ReactJS for front-end development, ExpressJS for server-side routing, MongoDB for database management, Cloudinary for image storage and management, Mongoose for object modeling and Netlify for deployment.
						</p>
					</div>
				)}
			</div>
		</div>
	)
}

