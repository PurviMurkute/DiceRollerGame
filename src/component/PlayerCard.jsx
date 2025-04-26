import React, { useState, useEffect } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";

export const PlayerCard = ({ playername }) => {
  const diceIcons = {
    1: Dice1,
    2: Dice2,
    3: Dice3,
    4: Dice4,
    5: Dice5,
    6: Dice6,
  };

  const [Score, setScore] = useState(0);
  const [diceValue, setDiceValue] = useState(1);

  const DiceComponent = diceIcons[diceValue];

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomNum);
    setScore((prevScore) => prevScore + randomNum);
  };

  useEffect(() => {
    if (Score >= 50) {
      alert(`${playername} Wins!`);
    }
  }, [Score]);

  return (
    <div className="border-2 bg-emerald-200 py-5 px-10 my-20 mx-10 rounded-xl shadow-2xl w-1/3">
      <h2 className="text-center text-emerald-600 py-5 text-4xl">
        {playername}
      </h2>
      <h4 className="text-center text-emerald-600 py-2 text-2xl">
        Your Score is <span className="font-bold text-3xl">{Score}</span>
      </h4>
      <div className="flex flex-col items-center">
        <DiceComponent className="w-20 h-20 text-emerald-700" />
        <button
          onClick={rollDice}
          className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
        >
          Roll Dice
        </button>
      </div>
    </div>
  );
};
