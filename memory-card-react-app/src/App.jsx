import { useState } from "react";
import "./App.css";
import Cards from "./components/cards";
import "./styles/cards.css";

function App() {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  return (
    <>
      <div id="card-game">
        <h1>Arcane memory card game</h1>
        <h4 id="scoreCounter">Score: {score}</h4>
        <h4 id="highestScore">Highest score: {highestScore}</h4>
        <Cards
          score={score}
          setScore={setScore}
          setHighestScore={setHighestScore}
        />
      </div>
    </>
  );
}

export default App;
