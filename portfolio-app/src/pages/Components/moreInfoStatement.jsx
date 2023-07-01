import React from 'react'
import statementBackground from '../../utils/imgs/statement-background.jpg'

export const MoreInfoStatement = () => {
  const style = {textShadow: ' 2px 2px 4px rgba(0, 0, 0, 0.8'}
  return (
    <div className='opacity-90 w-full h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px] bg-cover bg-center' 
    style={{backgroundImage: `url(${statementBackground})`}}>
    
    <div className='z-1 flex flex-col justify-center items-center content-center h-full text-5xl font-bold shadow-lg text-white' style = {style}>Revolutionizing software solutions for a brighter future!</div>
        
    </div>
  )
}
