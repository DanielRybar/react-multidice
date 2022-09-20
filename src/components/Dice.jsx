import { Button } from "reactstrap";

export const Dice = ({index, dices, setDices, randomColor}) => (
    <Button style={{margin: 10}} onClick={e => {
        let d = [...dices]; // JSON.parse(JSON.stringify(dices));
        d[index] = Math.round(Math.random() * 5 + 1);
        setDices(d);
        //alert(d[index]);
        //dices[index] = Math.round(Math.random() * 6 + 1);
    }} color={randomColor()}>{dices[index]}</Button>
);

export default Dice;