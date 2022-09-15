export const DiceCount = ({value, setValue}) => (
    <div>
        <button onClick={e => {setValue(value - 1)}} disabled={value <= 0 ? true : false}>-</button>
        {value}
        <button onClick={e => {setValue(value + 1)}} disabled={value >= 40 ? true : false}>+</button>
    </div>
);

export default DiceCount;