import { useState, useEffect } from "react";
import Dice from "./Dice";

export const DiceContainer = ({dices, setDices, history, setHistory}) => {
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
        <button onClick={e => {
            let newArr = [];
            for(let i = 0; i < dices.length; i++) {
                newArr.push(Math.round(Math.random() * 5 + 1));
            }
            setDices(newArr);
        }}>Roll</button>
        <br></br>
        <button 
            onClick={e => {
                let arr = JSON.parse(JSON.stringify(history));
                if(arr[0][0][0].length === 0)
                {
                    arr.shift();
                    arr.shift();
                }
                arr.pop();
                setHistory(arr);
            }}
            disabled={!history[history.length - 1] || history.length === 0 ? true : false}>History back</button>
        <button onClick={e => {
            setHistory([]);
        }}>Clear history</button>
        </>
    );
}

export default DiceContainer;