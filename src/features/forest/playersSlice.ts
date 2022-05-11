import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const PossibleColors = ['red', 'orange', 'blue', 'green'] as const;

export type PlayerColor = typeof PossibleColors[number];

export interface Player {
  id: number
  name: string
  color: PlayerColor
  position: number
}

const initialState: Player[] = [
  {
    id: Math.random(),
    name: 'sadra',
    color: "red",
    position: 0
  }
]

export const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer: (players, { payload: newPlayer }: PayloadAction<Player>) => {
      players.push(newPlayer);
    },
    removePlayer: (players, { payload: departingPlayer }: PayloadAction<Player>) => {
      const toBeDeletedIndex = players.findIndex(p => p.id === departingPlayer.id);

      if (toBeDeletedIndex < 0) { console.warn('player not found'); return };

      players.splice(toBeDeletedIndex, 1);
    },
    movePlayer: (players, { payload: { player, to } }: PayloadAction<{ player: Player, to: number }>) => {
      const toBeMovedIndex = players.findIndex(p => p.id === player.id)

      if (toBeMovedIndex < 0) { console.warn('player not found'); return };

      players[toBeMovedIndex].position = to;
    }
  }
})

export default playersSlice.reducer;

export const { addPlayer, movePlayer, removePlayer } = playersSlice.actions;

export const selectPlayers = (state: RootState) => state.players;
export const selectPlayersOnCell =(state: RootState, cellIndex: number) => state.players.filter(player => player.position === cellIndex)