import Button from "./Button";

const AnswerButtons = ({
    optionList,
    handleSelect,
    selectedAnswer,
    setSelectedAnswer,
    rowIndex,
    correctAnswers,
    correctOption,
    endGame,
}) => {
    const buttons = optionList.map((button, index) => (
        <Button
            key={index}
            correctOption={correctOption}
            correctAnswers={correctAnswers}
            handleSelect={handleSelect}
            content={optionList[index]}
            setSelectedAnswer={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
            rowIndex={rowIndex}
            endGame={endGame}
        ></Button>
    ));

    return <div className="answer__container">{buttons}</div>;
};

export default AnswerButtons;
