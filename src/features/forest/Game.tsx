import { useAppDispatch, useAppSelector } from "app/hooks";
import { useState } from "react";
import Dice from "./dice/dice";
import { nextTurn, selectDice, selectTurn } from "./gameSlice";
import Map from "./map/Map";
import Players from "./players/Players";
import { interpolatePlayer, movePlayer } from "./playersSlice";

const Game = () => {
  const turn = useAppSelector(selectTurn);

  const dispatch = useAppDispatch();

  function diceRolled(dice: number) {
    dispatch(interpolatePlayer(turn, turn.position + dice ));
    dispatch(nextTurn());
  }

  return (
    <div>
      <Map />
      <div className="row">
        <Dice rolled={diceRolled}/>
      </div>
      <Players />
    </div>
  );
};

export default Game;
