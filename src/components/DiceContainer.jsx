import { Button, Alert } from "reactstrap";
import { useState, useEffect } from "react";
import Dice from "./Dice";

export const DiceContainer = ({dices, setDices, history, setHistory, count, setCount, randomColor}) => {
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
        <h2>Dices</h2>
        <div>
            {dices.map((item, index) => (<Dice key={index} index={index} dices={dices} setDices={setDices} randomColor={randomColor} />))}
        </div>
        <Alert color="danger">Sum of dices: {sum}</Alert>
        <Button onClick={e => {
            let newArr = [];
            for(let i = 0; i < dices.length; i++) {
                newArr.push(Math.round(Math.random() * 5 + 1));
            }
            setDices(newArr);
        }} color="primary">Roll</Button>
        <Button onClick={e => {setCount(0);}} disabled={count === 0  || sum === 0} color="danger">Set count to 0</Button>
        <br></br>
        <Button onClick={e => {setHistory([]);}} disabled={history.length === 0}>Clear history</Button>
        </>
    );
}

export default DiceContainer;