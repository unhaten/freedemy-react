import Answer from "./Answer";
import { useMemo, useState } from "react";

const QuizRows = ({
    quizData,
    selectedAnswer,
    handleSelect,
    setSelectedAnswer,
    endGame,
    correctAnswers,
}) => {
    const showDataRows = quizData.map((item, index) => {
        return (
            <Answer
                correctAnswers={correctAnswers}
                rowIndex={index}
                question={item.question}
                key={item.question}
                correctOption={item.correct_answer}
                incorrectOptions={item.incorrect_answers}
                selectedAnswer={selectedAnswer}
                handleSelect={handleSelect}
                setSelectedAnswer={setSelectedAnswer}
                endGame={endGame}
            ></Answer>
        );
    });

    return (
        <div className={endGame ? "quiz__rows endGame" : "quiz__rows"}>
            {showDataRows}
        </div>
    );
};

export default QuizRows;
