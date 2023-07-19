import { useState, useEffect, useMemo } from "react";
import StartScreen from "./components/StartScreen";
import Main from "./components/Main";
import Loader from "./components/Loader";
import "./styles/style.css";

const Quiz = () => {
    const getToken = () => {
        fetch(`https://opentdb.com/api_token.php?command=request`)
            .then((res) => {
                return res.json();
            })
            .then(
                (result) => {
                    console.log(result);
                    return result.token;
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    const [inGame, setInGame] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [quizData, setQuizData] = useState([]);
    // const [token, setToken] = useState(getToken());

    const startGame = () => {
        getQuizData();
        setInGame(true);
    };

    const quizProperties = {
        amount: 5,
        difficulty: "easy",
        type: "multiple",
        // token: token,
    };

    const getQuizData = () => {
        fetch(
            `https://opentdb.com/api.php?amount=${quizProperties.amount}&category=15&difficulty=${quizProperties.difficulty}&type=${quizProperties.type}`
        )
            .then((res) => {
                return res.json();
            })
            .then(
                (result) => {
                    // console.log(token);
                    console.log(result);
                    setIsLoading(false);
                    setQuizData(result.results);
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    return (
        <>
            <main>
                {!inGame ? (
                    <StartScreen startGame={startGame}></StartScreen>
                ) : isLoading ? (
                    <Loader></Loader>
                ) : (
                    <Main
                        quizData={quizData}
                        getQuizData={getQuizData}
                        setIsLoading={setIsLoading}
                    ></Main>
                )}
            </main>
        </>
    );
};

export default Quiz;
