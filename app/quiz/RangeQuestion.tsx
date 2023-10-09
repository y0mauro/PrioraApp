// quiz/RangeQuestion.js
import React, { useState } from 'react';

export const RangeQuestion = ({ Question, onAnswerSelected, onNextQuestion }) => {
    const [value, setValue] = useState(25);

    const handleRangeChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onAnswerSelected(newValue);
    };

    return (
        <div>

            <div className='text-2xl accent-content  mb-5 font-bold text-[#e5e7eb]'>{Question}</div>
            <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={handleRangeChange}
                onKeyUp={onNextQuestion}  // Add this line
                className="range"
                step={25}
            />
            <div className="w-full flex justify-between text-xs px-2">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
        </div>
    );
}
