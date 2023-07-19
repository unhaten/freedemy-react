import "./styles/styles.css";
import Die from "./components/Die";
import Timer from "./components/Timer";
import Button from "./components/Button";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Tenzies = () => {
    const startGame = () => {
        setInGame(true);
    };

    const generateNewDie = () => {
        return {
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false,
            id: nanoid(),
        };
    };

    const addNewDice = () => {
        const newDice = [];
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie());
        }
        return newDice;
    };

    const rollDice = () => {
        setDice((prev) => {
            return prev.map((die) => {
                return !die.isHeld ? generateNewDie() : die;
            });
        });
        setRolls((prev) => prev + 1);
    };

    const holdDice = (id) => {
        setDice((prev) => {
            return prev.map((die) => {
                return id === die.id ? { ...die, isHeld: !die.isHeld } : die;
            });
        });
    };

    const restartGame = () => {
        setDice(addNewDice());
        setTenzies(false);
        setIsLost(false);
        setCounter(gameTime);
        setRolls(0);
    };

    const [tenzies, setTenzies] = useState(false);
    const [isLost, setIsLost] = useState(false);
    const [dice, setDice] = useState(addNewDice());
    const [counter, setCounter] = useState(null);
    const [inGame, setInGame] = useState(false);
    const [buttonBlur, setButtonBlur] = useState({});
    const [rolls, setRolls] = useState(0);
    const [bestTime, setBestTime] = useState(
        localStorage.getItem("bestTime") || "TBA"
    );
    // const [playedTime, setPlayedTime] = useState(null);
    const gameTime = 20;

    useEffect(() => {
        if (inGame) {
            if (counter > 0) {
                const timer = setInterval(() => setCounter(counter - 1), 1000);
                return () => clearInterval(timer);
            } else if (counter === 0 && !tenzies) {
                setIsLost(true);
                setCounter("You lost!");
            }
        } else {
            setCounter(gameTime);
        }
    }, [counter, inGame, tenzies]);

    useEffect(() => {
        const allHeld = dice.every((die) => die.isHeld);
        const firstValue = dice[0].value;
        const allEqual = dice.every((die) => firstValue === die.value);
        if (allHeld && allEqual) {
            const localBestTime = localStorage.getItem("bestTime") || Infinity;
            const time = gameTime - counter;
            setTenzies(true);
            if (time < localBestTime) {
                localStorage.setItem("bestTime", time);
                setBestTime(time);
            }
            return;
        }
    }, [dice]);

    // useEffect(() => {
    //     tenzies && console.log(counter);
    // }, [tenzies]);

    useEffect(() => {
        // isLost
        //     ? setButtonBlur({
        //           backgroundColor: "#5035ff63",
        //           color: "black",
        //       })
        //     : setIsLost();
        if (isLost) {
            setButtonBlur({
                backgroundColor: "#5035ff63",
                color: "black",
                pointerEvents: "none",
            });
            setTimeout(() => {
                setButtonBlur();
            }, 2000);
        }
    }, [isLost]);

    const diceElements = dice.map((die) => (
        <Die
            value={die.value}
            key={die.id}
            isHeld={die.isHeld}
            inGame={inGame}
            // holdDice={holdDice}
            // id={die.id}
            holdDice={() => holdDice(die.id)}
        ></Die>
    ));
    return (
        <main className="main">
            {tenzies && <Confetti width={1920} height={1080} />}
            <div className="main__container">
                <h1>Tenzies</h1>
                <p className="main__text">
                    Roll until all dice are the same. Click each die to freeze
                    it at its current value between rolls. You need to do it in
                    limited time.
                </p>
                <div className="info__container">
                    {inGame && (
                        <p className="info__rolls">Amount of rolls: {rolls}</p>
                    )}
                    {inGame &&
                        (!tenzies ? (
                            <Timer
                                counter={counter}
                                isLost={isLost}
                                tenzies={tenzies}
                            ></Timer>
                        ) : (
                            <p className="info__message">You win!</p>
                        ))}
                    {inGame && (
                        <p className="info__time">
                            Best time: {bestTime && bestTime + "s"}
                        </p>
                    )}
                </div>
                <section
                    className={
                        !inGame
                            ? "section__die waiting"
                            : isLost
                            ? "section__die lost"
                            : !tenzies
                            ? "section__die"
                            : "section__die win"
                    }
                >
                    {diceElements}
                </section>

                <Button
                    buttonBlur={buttonBlur}
                    inGame={inGame}
                    isLost={isLost}
                    tenzies={tenzies}
                    rollDice={rollDice}
                    restartGame={restartGame}
                    startGame={startGame}
                ></Button>
            </div>
        </main>
    );
};

export default Tenzies;

// <div className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}></div>
