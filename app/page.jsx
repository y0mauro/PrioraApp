"use client";

import React, { useState, useEffect } from 'react';
import Logo from './components/Logo';
import questions from './data/Questions';
import QuestionContainer from './components/QuestionContainer';
import NavigationButtons from './components/Navigation';

export default function Home() {
  const themes = ["dark", "forest", "dracula", "halloween", "light"]
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  const switchTheme = () => {
    const nextThemeIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextThemeIndex]);
  };

  return (
    <main>
      <div className="flex justify-between items-center p-4">
        <Logo />
        <button onClick={switchTheme} className="btn btn-primary">
          Switch Theme
        </button>
      </div>

      <QuestionContainer
        currentQuestionIndex={currentQuestionIndex}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
      />
      <NavigationButtons
        currentQuestionIndex={currentQuestionIndex}
        setCurrentQuestionIndex={setCurrentQuestionIndex}
        questionsLength={questions.length}
        answers={answers}
      />
    </main>
  );
}
