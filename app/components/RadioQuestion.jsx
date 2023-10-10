import React, { useState } from 'react';

export const RadioQuestion = ({ Question, onAnswerSelected }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ["Yes", "No"];

    const handleChange = (option) => {
        setSelectedOption(option);
        onAnswerSelected(option);
    };

    return (
        <div>
            <div className='text-2xl accent-content mb-5 font-bold text-[#e5e7eb]'>{Question}</div>

            {options.map((option, index) => (
                <div key={index}>
                    <label className="label cursor-pointer w-32 ">
                        <span className="label-text">{option}</span>
                        <input
                            type="radio"
                            name="radio-question"
                            className={`radio ${selectedOption === option ? (option === "Yes" ? "checked:bg-blue-500 checked:text-white" : "checked:bg-red-500 checked:text-white") : ""}`}
                            checked={selectedOption === option}
                            onChange={() => handleChange(option)}
                        />
                    </label>
                </div>
            ))}
        </div>
    );
};
