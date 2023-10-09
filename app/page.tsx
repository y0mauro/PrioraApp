"use client";

import React, { useState } from 'react';
import Logo from './components/Logo';
import { RangeQuestion } from './quiz/RangeQuestion';

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    "How do you feel today?",
    "How much do you enjoy coding?",
    "Rate your knowledge on Next.js",
    // ... add more questions as needed
  ];

  const handleAnswerSelected = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Quiz finished. Answers: ", answers);
      setTimeout(() => {
        console.log("Submitting result...");
        // Handle submission of result, e.g., navigate to another page or show results
      }, 3000);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <main>
      <Logo />
      <div className='w-[80%] m-0 m-auto'>
        <RangeQuestion
          Question={questions[currentQuestionIndex]}
          onAnswerSelected={handleAnswerSelected}
          onNextQuestion={handleNextQuestion}
        />
        <div className="flex justify-between">
          {currentQuestionIndex > 0 && (
            <button className="btn btn-active btn-accent my-[5rem] " onClick={handlePreviousQuestion}>
              Back
            </button>
          )}
          {currentQuestionIndex < questions.length - 1 ? (
            <button className="btn btn-active btn-accent my-[5rem]" onClick={handleNextQuestion}>
              Next
            </button>
          ) : (
            <button className='btn btn-secondary '>Submit result</button>
          )}
        </div>
      </div>
    </main>
  )
}