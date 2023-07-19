const Timer = ({ counter, isLost, tenzies }) => {
    return (
        <div className="timer">
            <span className={counter <= 5 ? "timer__number red" : 'timer__number'}>{counter}</span>
            {!isLost && !tenzies && <div className="circle border"></div>}
        </div>
    );
};

export default Timer;

// React.useEffect(() => {
//   const timer =
//     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//   return () => clearInterval(timer);
// }, [counter]);
