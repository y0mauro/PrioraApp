"use client";
import React, { useState, useMemo } from 'react';

export const TextInputQuestion = ({ Question, onAnswerSelected, onNextQuestion }) => {
    const [value, setValue] = useState('');

    // Randomly choose a class when component is mounted
    const inputClass = useMemo(() => {
        const classes = ['input-secondary', 'input-primary'];
        return classes[Math.floor(Math.random() * classes.length)];
    }, []); // empty dependency array ensures this runs only once

    const handleTextChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onAnswerSelected(newValue);
    };

    return (
        <div>
            <div className='text-2xl accent-content mb-5 font-bold text-[#e5e7eb]'>{Question}</div>
            <input
                type="text"
                value={value}
                onChange={handleTextChange}
                onKeyUp={onNextQuestion}
                className={`input text-white input-bordered ${inputClass} w-full max-w-xs`}
                placeholder="Enter your answer..."
            />
        </div>
    );
};
