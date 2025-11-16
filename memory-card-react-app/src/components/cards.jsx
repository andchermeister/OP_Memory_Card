import { useState } from "react";

export default function Cards({ score, setScore, setHighestScore }) {
  const [clickedCards, setClickedCards] = useState({});
  const [cards, setCards] = useState([
    {
      card_id: 1,
      name: "Jinx",
      url: "https://static.klipy.com/ii/4e7bea9f7a3371424e6c16ebc93252fe/9a/91/24P6e8zxdnMmTmNe2rw.gif",
    },
    {
      card_id: 2,
      name: "Vi",
      url: "https://static.klipy.com/ii/d7aec6f6f171607374b2065c836f92f4/8b/a4/qGmfQDs8.gif",
    },
    {
      card_id: 3,
      name: "Caitlyn",
      url: "https://static.klipy.com/ii/bea85337777ad0e23e63683391435543/4a/96/dbIRQoEN.gif",
    },
    {
      card_id: 4,
      name: "Mel",
      url: "https://static.klipy.com/ii/35ccce3d852f7995dd2da910f2abd795/82/85/S7rQTWmm.gif",
    },
    {
      card_id: 5,
      name: "Viktor",
      url: "https://static.klipy.com/ii/35ccce3d852f7995dd2da910f2abd795/d0/f0/ubKm0uAO.gif",
    },
    {
      card_id: 6,
      name: "Heirmerdinger",
      url: "https://static.klipy.com/ii/d7aec6f6f171607374b2065c836f92f4/0f/e8/VRDIBXyv.gif",
    },
    {
      card_id: 7,
      name: "Jace",
      url: "https://static.klipy.com/ii/a15b48460c436e1e92c85ffc680932cc/4f/0c/OedAcN0u.gif",
    },
    {
      card_id: 8,
      name: "Vander",
      url: "https://static.klipy.com/ii/4e7bea9f7a3371424e6c16ebc93252fe/b1/42/jr55NdJ7Xqh4kiN7kj.gif",
    },
    {
      card_id: 9,
      name: "Silco",
      url: "https://static.klipy.com/ii/4e7bea9f7a3371424e6c16ebc93252fe/2f/9f/fuJgzL1cSrOFBhy.gif",
    },
    {
      card_id: 10,
      name: "Sevika",
      url: "https://static.klipy.com/ii/4e7bea9f7a3371424e6c16ebc93252fe/b8/b3/VCFgQbkWvl9Woa9.gif",
    },
    {
      card_id: 11,
      name: "Ekko",
      url: "https://static.klipy.com/ii/35ccce3d852f7995dd2da910f2abd795/1c/18/HAgmV27W.gif",
    },
    {
      card_id: 12,
      name: "Singed",
      url: "https://static.klipy.com/ii/35ccce3d852f7995dd2da910f2abd795/4d/c1/2Kw7pCfc.gif",
    },
    {
      card_id: 13,
      name: "Ambessa",
      url: "https://static.klipy.com/ii/4e7bea9f7a3371424e6c16ebc93252fe/71/ea/ChoqqABrcOOd.gif",
    },
    {
      card_id: 14,
      name: "Smeech",
      url: "https://static.klipy.com/ii/4e7bea9f7a3371424e6c16ebc93252fe/3c/8e/fRK2z9NMyQM52PKWgaz.gif",
    },
  ]);

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const handleClick = (key) => {
    if (clickedCards[key]) {
      setHighestScore(score);
      setScore(0);
      alert("You lost, try again!");
      shuffleCards();
    } else {
      setScore(score + 1);
      setClickedCards((prev) => ({ ...prev, [key]: true }));
      shuffleCards();
    }
  };

  return (
    <div>
      {cards.map((card) => (
        <button onClick={() => handleClick(card.card_id)}>
          <img className="card" src={card.url} alt={card.name} />
        </button>
      ))}
    </div>
  );
}
