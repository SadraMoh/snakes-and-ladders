import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { Player, selectPlayers } from "./playersSlice";

export interface Game {
  turn: Player
  dice: number
}

const initialState: Game = {
  turn: {
    id: Math.random(),
    name: 'noone',
    color: 'red',
    position: -1
  },
  dice: 0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setDice: (game, { payload: dice }: PayloadAction<number>) => {
      game.dice = dice;
    },
    setTurn: (game, { payload: player }: PayloadAction<Player>) => {
      game.turn = player;
    }
  }
})

// give turn to the next player, THUNK
export const nextTurn =
  (): AppThunk =>
    (dispatch, getState) => {
      const state = getState();
      const players = selectPlayers(state);
      const turn = selectTurn(state);

      const currentTurnIndex = players.indexOf(turn);
      const nextTurnIndex = (currentTurnIndex + 2 > players.length) ? 0 : currentTurnIndex + 1;

      dispatch(setTurn(players[nextTurnIndex]))
    };

export const { setDice, setTurn } = gameSlice.actions;

export default gameSlice.reducer;

export const selectGame = (state: RootState) => state.game;
export const selectTurn = (state: RootState) => state.game.turn;
export const selectDice = (state: RootState) => state.game.dice;