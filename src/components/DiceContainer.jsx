import { useState, useEffect } from "react";
import Dice from "./Dice";

export const DiceContainer = ({dices, setDices}) => {
    const [sum, setSum] = useState(0);
    useEffect(() => {
        let s = 0;
        for(let i = 0; i < dices.length; i++) {
            s = s + dices[i];
        }
        setSum(s);
    }, [dices]);
    return (
        <>
        <div>
            {dices.map((item, index) => (<Dice key={index} index={index} dices={dices} setDices={setDices} />))}
        </div>
        <div>{sum}</div>
        </>
    );
}

export default DiceContainer;