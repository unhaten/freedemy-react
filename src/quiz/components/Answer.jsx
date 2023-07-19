import AnswerButtons from "./AnswerButtons";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import { useMemo } from "react";

const Answer = ({
    question,
    correctOption,
    incorrectOptions,
    selectedAnswer,
    handleSelect,
    setSelectedAnswer,
    rowIndex,
    correctAnswers,
    endGame,
}) => {
    let optionList = [correctOption];
    incorrectOptions.map((option) => optionList.push(option));
    optionList = useMemo(() => optionList.sort(() => Math.random() - 0.5), []);
    return (
        <div className="row__container">
            <h3 className="quiz__question">{decode(question)}</h3>
            <AnswerButtons
                correctOption={correctOption}
                correctAnswers={correctAnswers}
                optionList={optionList}
                key={nanoid()}
                selectedAnswer={selectedAnswer}
                handleSelect={handleSelect}
                setSelectedAnswer={setSelectedAnswer}
                rowIndex={rowIndex}
                endGame={endGame}
            ></AnswerButtons>
            <hr />
        </div>
    );
};

export default Answer;
