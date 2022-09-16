import './App.css';
import React, { useState, useEffect } from "react";
import DiceContainer from "./components/DiceContainer";
import DiceCount from "./components/DiceCount";

function App() {
  const [count, setCount] = useState(10);
  const [dices, setDices] = useState([]);
  const [history, setHistory] = useState([]);
  useEffect(() => {
    let arr = [];
    for(let i = 0; i < count; i++) {
      arr.push(Math.round(Math.random() * 5 + 1));
    }
    setDices(arr);
  }, [count]);
  
  useEffect(() => {
    let arr = [];
    arr.push([dices]);
    setHistory((h) => [...h, arr]);
  }, [dices]);
  return (
    <div className="App">
      <DiceCount value={count} setValue={setCount} />
      <DiceContainer 
        dices={dices} 
        setDices={setDices} 
        history={history} 
        setHistory={setHistory} 
      />
      <div>
        {history[history.length - 1]
        ? history[history.length - 1][0][0].map((item, index) => (<span style={{margin: 10}} key={index}>{item}</span>))
        : "" }
      </div>
    </div>
  );
}

export default App;