import React from 'react';
import { RangeQuestion } from './RangeQuestion';
import { TextInputQuestion } from './TextInputQuestion';
import { RadioQuestion } from './RadioQuestion';

const QuestionContainer = ({ currentQuestionIndex, questions, answers, setAnswers }) => {
  const handleAnswerSelected = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };

  const renderQuestion = (currentQuestion) => {
    switch (currentQuestion.type) {
      case 'text':
        return <TextInputQuestion Question={currentQuestion.text} onAnswerSelected={handleAnswerSelected} />;
      case 'radio':
        return <RadioQuestion Question={currentQuestion.text} options={currentQuestion.options} onAnswerSelected={handleAnswerSelected} />;
      case 'range':
        return <RangeQuestion Question={currentQuestion.text} onAnswerSelected={handleAnswerSelected} />;
      default:
        return null;
    }
  };

  return (
    <div className='w-[50%] m-0 my-10 m-auto'>
      {renderQuestion(questions[currentQuestionIndex])}
    </div>
  );
};

export default QuestionContainer;
