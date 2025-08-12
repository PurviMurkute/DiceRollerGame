import React, { useState } from "react";
import { PlayerCard } from "../component/PlayerCard";

export const App = () => {
  const [player1Input, setPlayer1Input] = useState("");
  const [player2Input, setPlayer2Input] = useState("");
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [currentTurn, setCurrentTurn] = useState(1);

  const handleSubmitPlayer1 = () => {
    if (player1Input.trim()) setPlayer1Name(player1Input.trim());
    setPlayer1Input("");
  };

  const handleSubmitPlayer2 = () => {
    if (player2Input.trim()) setPlayer2Name(player2Input.trim());
    setPlayer2Input("");
  };

  return (
    <div className="bg-white min-h-screen">
      <h1 className="text-center text-2xl font-bold py-5 text-emerald-700 bg-emerald-200">
        Dice Roller Game
      </h1>
      <p className="text-center font-medium text-emerald-700 py-3">Player who will cross 25 points first wins!</p>

      <div className="flex flex-col justify-center items-center gap-4 my-6">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Enter Player-1 name"
            value={player1Input}
            onChange={(e) => setPlayer1Input(e.target.value)}
            className="bg-white px-4 py-2 rounded-md w-64 border border-emerald-400"
          />
          <button
            onClick={handleSubmitPlayer1}
            className="bg-emerald-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-emerald-700"
          >
            Submit
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Enter Player-2 name"
            value={player2Input}
            onChange={(e) => setPlayer2Input(e.target.value)}
            className="bg-white px-4 py-2 rounded-md w-64 border border-emerald-400 "
          />
          <button
            onClick={handleSubmitPlayer2}
            className="bg-emerald-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-emerald-700"
          >
            Submit
          </button>
        </div>
      </div>
      <p className="text-center font-bold text-emerald-600">Current Player: <span className="text-xl text-emerald-700">{currentTurn === 1 ? player1Name || "Player 1" : player2Name || "Player 2"}</span></p>
      <div className="flex justify-center mx-20">
        <PlayerCard
          playername={player1Name || "Player 1"}
          currentTurn={currentTurn}
          setCurrentTurn={setCurrentTurn}
          playerNumber={1}
        />

        <PlayerCard
          playername={player2Name || "Player 2"}
          currentTurn={currentTurn}
          setCurrentTurn={setCurrentTurn}
          playerNumber={2}
        />
      </div>
    </div>
  );
};
