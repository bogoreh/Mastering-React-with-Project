import React from 'react';
import Option from './Option';

const Question = ({ 
  question, 
  options, 
  selectedOption, 
  correctAnswer, 
  showResults, 
  onOptionSelect 
}) => {
  return (
    <div className="question-container">
      <h2 className="question-text">{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <Option
            key={index}
            option={option}
            isSelected={selectedOption === option}
            isCorrect={correctAnswer === option}
            showResults={showResults}
            onSelect={() => onOptionSelect(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;