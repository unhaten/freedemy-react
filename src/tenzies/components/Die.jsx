import Pip from "./Pip";
import { useState } from "react";
import { nanoid } from "nanoid";

const Die = ({ value, isHeld, holdDice, id, inGame }) => {
    const styles = {
        backgroundColor: isHeld ? "#59e391" : "white",
    };

    const generatePip = () => {
        const pipList = [];
        for (let i = 1; i <= value; i++) {
            pipList.push(value);
        }
        return pipList;
    };

    const [pip, setPip] = useState(generatePip());

    const pipList = pip.map((pip) => {
        return <Pip key={nanoid()}></Pip>;
    });

    //    <div className={isHeld ? "die__container isHeld" : "die__container"}>
    return (
        <div
            className="die__container"
            style={styles}
            // onClick={() => holdDice(id)}
            onClick={holdDice}
        >
            {/* <span className="die__number">{value}</span> */}
            {pipList}
        </div>
    );
};

export default Die;
