import React from 'react';

const NavigationButtons = ({ currentQuestionIndex, setCurrentQuestionIndex, questionsLength, answers }) => {

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questionsLength - 1) {
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
        <div className="flex justify-between">
            {currentQuestionIndex > 0 ? (
                <>
                    <button className="btn btn-active btn-accent my-[5rem]" onClick={handlePreviousQuestion}>
                        Back
                    </button>
                    {currentQuestionIndex < questionsLength - 1 ? (
                        <button className="btn btn-active btn-accent my-[5rem]" onClick={handleNextQuestion}>
                            Next
                        </button>
                    ) : (
                        <button className='btn btn-secondary '>Submit result</button>
                    )}
                </>
            ) : (
                <button className="btn btn-active btn-accent my-[5rem] ml-auto" onClick={handleNextQuestion}>
                    Next
                </button>
            )}
        </div>
    );
}

export default NavigationButtons;
