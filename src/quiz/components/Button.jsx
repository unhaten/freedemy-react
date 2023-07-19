import { decode } from "html-entities";
import { useEffect } from "react";

const Button = ({
    content,
    handleSelect,
    setSelectedAnswer,
    rowIndex,
    selectedAnswer,
    correctAnswers,
    correctOption,
    endGame,
}) => {
    const handleAnswerSelect = () => {
        const newArray = selectedAnswer.map((item, index) => {
            // console.log(content, item);
            return index === rowIndex ? content : item;
        });
        setSelectedAnswer(newArray);
        // console.log(newArray);
    };

    // useEffect(() => {
    //     if (endGame) {
    //         console.log(selectedAnswer[rowIndex]);
    //         console.log(correctOption);
    //     }
    // }, [endGame]);

    return (
        <button
            className={
                !endGame
                    ? selectedAnswer[rowIndex] !== content
                        ? "answer__button answer__button_box-shadow"
                        : "answer__button selected"
                    : selectedAnswer[rowIndex] !== content
                    ? "answer__button blurred"
                    : correctOption === selectedAnswer[rowIndex]
                    ? "answer__button correct"
                    : "answer__button incorrect"
            }
            // onClick={() => handleSelect(properties.id, properties.isHeld)}
            onClick={handleAnswerSelect}
        >
            {decode(content)}
        </button>
    );
};

export default Button;
