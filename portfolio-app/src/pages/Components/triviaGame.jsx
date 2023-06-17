import React, {useState} from 'react'
import triviaImage from '../../utils/imgs/trivia-game.png'

export const TriviaProject = ({projectImageStyle}) => {
    const [showDescription, setShowDescription] = useState(false);
    return (
        <div className='flex flex-col justify-center items-center'
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}>
            <h1 className='space-y-0'>
                Final Fantasy API
            </h1>
            <div className='w-96'>
                <img className={projectImageStyle} src={triviaImage} alt="img" />
                {showDescription && (
					<div>
                        <p className='indent-5'> A static web trivia game about everything. There are 10 questions and you must answer all of them correctly. Users can restart at the end of the game.</p>
                        <p className='indent-5 mt-1'>
                        Built using only HTML, CSS, and Vanilla Javascript
                        </p>
                    </div> 
                )}
            </div>
        </div>
    )
}
