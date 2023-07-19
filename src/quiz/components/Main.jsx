import QuizRows from "./QuizRows";
import Blob1 from "./Blob1";
import Blob2Small from "./Blob2Small";
import { useEffect, useState } from "react";

const Main = ({ quizData, getQuizData, setIsLoading }) => {
    const handleSelect = (id, isHeld) => {
        // console.log("clicked " + id);
        // console.log(isHeld);
        return { isHeld: !isHeld };
    };

    const handleAnswers = () => {
        setEndGame(true);
    };

    const restartGame = () => {
        setIsLoading(true)
        getQuizData();
        setEndGame(false);
    };

    const correctAnswers = quizData.map((item) => item.correct_answer);
    const [selectedAnswer, setSelectedAnswer] = useState(
        quizData.map((item) => "")
    );
    const [correctAnswersAmount, setCorrectAnswerAmount] = useState(null);
    const [endGame, setEndGame] = useState(false);

    // correctAnswers.forEach((answer, index) => {
    //     answer === selectedAnswer[index]
    //         ? console.log("correct")
    //         : console.log("wrong");
    // });

    // useEffect(() => {
    //     console.log(correctAnswers);
    // }, []);

    useEffect(() => {
        let counter = 0;
        for (let i = 0; i < correctAnswers.length; i++) {
            if (correctAnswers[i] === selectedAnswer[i]) {
                counter++;
            }
            setCorrectAnswerAmount(counter);
        }
    }, [selectedAnswer]);

    return (
        <>
            <Blob1></Blob1>
            <div className="main__container">
                <QuizRows
                    correctAnswers={correctAnswers}
                    endGame={endGame}
                    quizData={quizData}
                    selectedAnswer={selectedAnswer}
                    setSelectedAnswer={setSelectedAnswer}
                    handleSelect={handleSelect}
                ></QuizRows>
                <div className="quiz__results">
                    {!endGame ? (
                        <button
                            className="results__button center__button"
                            onClick={handleAnswers}
                        >
                            Check answers
                        </button>
                    ) : (
                        <>
                            <span className="results__score">
                                You scored {correctAnswersAmount} correct
                                answers
                            </span>
                            <button className="results__button center__button" onClick={restartGame}>
                                Play again
                            </button>
                        </>
                    )}
                </div>
            </div>
            <Blob2Small></Blob2Small>
        </>
    );
};

export default Main;
