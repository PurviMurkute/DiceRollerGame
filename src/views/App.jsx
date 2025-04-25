import React from "react";
import { PlayerCard } from "../component/PlayerCard";

export const App = () => {
  return (
    <div className="bg-emerald-100 min-h-screen py-10">
    <h1 className="text-center text-4xl font-bold mx-5 py-5 text-emerald-700 bg-emerald-200 border-2 border-emerald-700">
      Dice Roller Game
    </h1>
    <div className="flex justify-evenly mx-20">
    <PlayerCard playername="Player1" score="0"/>
    <PlayerCard playername="Player2" score="0"/>
    </div>
    </div>
  );
};
