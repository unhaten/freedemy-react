const Button = ({
    inGame,
    isLost,
    tenzies,
    rollDice,
    restartGame,
    startGame,
    buttonBlur,
}) => {
    return (
        <>
            {inGame ? (
                !isLost ? (
                    !tenzies ? (
                        <button onClick={rollDice} className="main__button">
                            Roll
                        </button>
                    ) : (
                        <button
                            onClick={() => restartGame()}
                            className="main__button main__button_win"
                        >
                            New Game
                        </button>
                    )
                ) : (
                    <button
                        onClick={() => restartGame()}
                        className="main__button"
                        style={buttonBlur}
                    >
                        Play again
                    </button>
                )
            ) : (
                <button onClick={startGame} className="main__button">
                    Play
                </button>
            )}
        </>
    );
};

export default Button;
