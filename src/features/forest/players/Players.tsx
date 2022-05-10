import { useAppDispatch, useAppSelector } from "app/hooks";
import React, { useState } from "react";
import { selectTurn } from "../gameSlice";
import {
  addPlayer,
  Player,
  PossibleColors,
  removePlayer,
  selectPlayers,
} from "../playersSlice";

const Players = () => {
  const players = useAppSelector(selectPlayers);
  const turn = useAppSelector(selectTurn);
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState<string>("");

  function submitUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!username) return;

    const selectedColers = players.map((i) => i.color);
    const availableColors = PossibleColors.filter(
      (i) => !selectedColers.includes(i)
    );

    if (!availableColors.length) {
      alert("No room for more players");
      return;
    }

    const player: Player = {
      id: Math.random(),
      position: -1,
      name: username,
      color: availableColors[0],
    };

    dispatch(addPlayer(player));
  }

  return (
    <>
      <form onSubmit={(e) => submitUser(e)}>
        <label htmlFor="username">username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <span style={{ color: player.color }}>{player.name}</span>
            {turn === player && <span>**</span>}
            <button onClick={() => dispatch(removePlayer(player))}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Players;
