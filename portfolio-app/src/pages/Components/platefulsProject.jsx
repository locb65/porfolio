import React, {useState} from 'react'
import homePageImage from '../../utils/imgs/Platefuls-home.png'

export const PlatefulsProject = ({projectImageStyle}) => {
	const [showDescription, setShowDescription] =useState(false);
	return (
		<div className='flex flex-col justify-center items-center'
		onMouseEnter={() => setShowDescription(true)}
		onMouseLeave={() => setShowDescription(false)}>
			<h1 className='space-y-0'>
				Platefuls
			</h1>
			<div className='w-96'>
				<img className={projectImageStyle}  src={homePageImage} alt="img" />
				{showDescription && (
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi eveniet excepturi tempora, qui distinctio aliquid sapiente iusto? Voluptatum suscipit molestiae quis earum fugit provident enim rerum repellat ut nesciunt! Dolore!</p>
				)}
			</div>
		</div>
	)
}

