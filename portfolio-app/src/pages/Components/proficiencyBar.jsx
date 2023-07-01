import React from 'react';

export const ProficiencyBar = ({ skill, confidence }) => {
  const barStyles = {
    width: `${confidence}%`,
    backgroundColor: '#6d737d',
    height: '15px',
    border: '1px solid black'
  };

  return (
    <div>
      <div>{skill}</div>
      <div style={barStyles}></div>
      <div>{`${confidence}% confidence`}</div>
    </div>
  );
};
