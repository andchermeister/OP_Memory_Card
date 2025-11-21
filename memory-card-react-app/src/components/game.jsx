import { useState } from "react";
import { cardsData } from "./cards";

export default function Game({ score, setScore, setHighestScore }) {
  const [clickedCards, setClickedCards] = useState({});
  const [cards, setCards] = useState(() =>
    [...cardsData].sort(() => Math.random() - 0.5)
  );

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const checkWin = () => {
    if (score + 1 === cards.length) {
      alert("Congratulations, you won!");
      restart();
      setHighestScore((prev) => prev + 1);
    }
  };

  const continuePlaying = (key) => {
    setScore((prev) => prev + 1);
    checkWin();
    setClickedCards((prev) => ({ ...prev, [key]: true }));
    shuffleCards();
  };

  const restart = () => {
    setHighestScore((prev) => Math.max(prev, score));
    setScore(0);
    setClickedCards({});
    shuffleCards();
  };

  const handleClick = (key) => {
    if (clickedCards[key]) {
      alert("You lost, try again!");
      restart();
    } else {
      continuePlaying(key);
    }
  };

  return (
    <div className="cardsDiv">
      {cards.map((card) => (
        <button
          className="cardBtn"
          key={card.card_id}
          onClick={() => handleClick(card.card_id)}
        >
          <img className="cardImg" src={card.url} alt={card.name} />
        </button>
      ))}
    </div>
  );
}
