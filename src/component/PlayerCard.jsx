import React, { useState, useEffect } from "react";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "lucide-react";

export const PlayerCard = ({
  playername,
  currentTurn,
  setCurrentTurn,
  playerNumber,
}) => {
  const diceIcons = {
    1: Dice1,
    2: Dice2,
    3: Dice3,
    4: Dice4,
    5: Dice5,
    6: Dice6,
  };
  const [score, setScore] = useState(0);
  const [diceValue, setDiceValue] = useState(1);
  const [isWin, setIsWin] = useState(false);

  const DiceComponent = diceIcons[diceValue];

  const rollDice = () => {
    if (currentTurn !== playerNumber) return; 

    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomNum);
    setScore((prevScore) => prevScore + randomNum);

    // Switch turn
    setCurrentTurn(currentTurn === 1 ? 2 : 1);
  };

  useEffect(() => {
    if (score >= 30) {
      alert(`${playername} Wins!`);
    }
  }, [score]);

  return (
    <div className="py-5 px-10 m-10 rounded-xl border-1 border-emerald-300 bg-emerald-50 w-1/3">
      <h2 className="text-center text-emerald-600 py-2 font-bold text-2xl">
        {playername}
      </h2>
      <h4 className="text-center text-emerald-600 py-4 text-xl">
        {playername} Score is{" "}
        <span className="font-bold text-3xl">{score}</span>
      </h4>

      <div className="flex flex-col items-center">
        <DiceComponent className="w-15 h-15 text-emerald-700" />
        <button
          onClick={rollDice}
          disabled={currentTurn !== playerNumber}
          className={`mt-4 px-4 py-2 rounded text-white ${
            currentTurn === playerNumber
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Roll Dice
        </button>
      </div>

      <button
        onClick={() => {
          setScore(0);
          setDiceValue(1);
        }}
        className="bg-emerald-700 text-emerald-100 px-10 py-3 my-5 block mx-auto"
      >
        Reset
      </button>
    </div>
  );
};
