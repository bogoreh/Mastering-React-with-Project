import React from 'react';

const Option = ({ option, isSelected, isCorrect, showResults, onSelect }) => {
  const getOptionClass = () => {
    if (!showResults) {
      return isSelected ? 'option selected' : 'option';
    }
    
    if (isCorrect) {
      return 'option correct';
    }
    
    if (isSelected && !isCorrect) {
      return 'option incorrect';
    }
    
    return 'option';
  };

  return (
    <div 
      className={getOptionClass()} 
      onClick={() => !showResults && onSelect()}
    >
      {option}
    </div>
  );
};

export default Option;