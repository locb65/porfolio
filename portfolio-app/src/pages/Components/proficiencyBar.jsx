import React from 'react';

export const ProficiencyBar = ({ skill, confidence }) => {
  const barStyles = {
    width: `${confidence}%`,
    backgroundColor: '#6d737d',
    height: '15px',
    border: '1px solid black',
    borderRight: '2px solid black'
    
  };

  return (
    <div>
      <div>{skill}</div>
      
      <div className='skill__container border-2 border-slate-900'><div style={barStyles}></div></div>
      <div>{`${confidence}% confidence`}</div>
    </div>
  );
};
