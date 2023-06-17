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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod deserunt natus sunt reprehenderit itaque numquam architecto atque, in ratione soluta commodi laboriosam odit quia placeat, fugit, recusandae exercitationem sit. Optio.</p>
                )}
            </div>
        </div>
    )
}
