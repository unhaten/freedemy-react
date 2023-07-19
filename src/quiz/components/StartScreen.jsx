import Blob1 from "./Blob1";
import Blob2 from "./Blob2";

const StartScreen = ({ startGame }) => {
    return (
        <>
            <Blob1></Blob1>
            <div className="container__center">
                <div className="blob1"></div>
                <h1>Quizzical</h1>
                <p className="center__description">
                    Some description if needed
                </p>
                <button className="center__button" onClick={startGame}>
                    Start quiz
                </button>
            </div>
            <Blob2></Blob2>
        </>
    );
};

export default StartScreen;
