import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, NavbarBrand, ListGroup, ListGroupItem } from 'reactstrap';
import React, { useState, useEffect } from "react";
import DiceContainer from "./components/DiceContainer";
import DiceCount from "./components/DiceCount";

function App() {
  const [count, setCount] = useState(10);
  const [dices, setDices] = useState([]);
  const [history, setHistory] = useState([]);

  // spousti se pri kazde zmene hodnoty count
  useEffect(() => {
    let arr = [];
    for(let i = 0; i < count; i++) {
      arr.push(Math.round(Math.random() * 5 + 1));
    }
    setDices(arr);
  }, [count]);
  
  // spousti se pri kazde zmene hodnoty dices
  useEffect(() => {
    let arr = [];
    if (dices.length !== 0) {
      arr.push([dices]);
      setHistory((h) => [...h, arr]);
    }
  }, [dices])

  // spousti se jednou pri pripojeni komponenty do stromu (funguje jako konstruktor)
  useEffect(() => {
    setHistory([]);
  }, []);
  
  const randomColor = () => { 
    const colors = ["success", "danger", "warning", "info", "primary"];
      return colors[Math.round(Math.random() * colors.length)];
  }

  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>Háky demo</NavbarBrand>
      </Navbar>
      <Container className='mt-5 text-center'>
        <DiceCount value={count} setValue={setCount} />
        <DiceContainer 
          dices={dices} 
          setDices={setDices} 
          history={history} 
          setHistory={setHistory} 
          count={count}
          setCount={setCount}
          randomColor={randomColor}
        />
        <Container className='mt-5'>
          <h2>{history.length === 0 ? "" : "History"}</h2>
          <ListGroup>
            {history.map((item, index) => (<ListGroupItem color={randomColor()} key={index}>{item.join()}</ListGroupItem>))}
          </ListGroup>
        </Container>
      </Container>
    </>
  );
}

export default App;