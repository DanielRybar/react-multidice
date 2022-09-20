import { Button, Label, FormGroup, Input } from "reactstrap";

export const DiceCount = ({value, setValue}) => (
    <div>
        <h2>Range</h2>
        <Label>{value}</Label>
        <FormGroup onSubmit={e => {e.preventDefault()}}>
            <Input type="range" min={0} max={40} onChange={e => {setValue(e.currentTarget.value)}} value={Number(value)} />
        </FormGroup>
        <Button onClick={e => {setValue(Number(value) - 1)}} disabled={value <= 0} color="warning">-</Button>
        <Label>{value}</Label>
        <Button onClick={e => {setValue(Number(value) + 1)}} disabled={value >= 40} color="success">+</Button>
    </div>
);

export default DiceCount;