import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import { Player, selectPlayers } from "./playersSlice";

export type OneToSix = 1 | 2 | 3 | 4 | 5 | 6;

export interface Game {
  turn: Player
  dice: OneToSix
}

const initialState: Game = {
  turn: {
    id: Math.random(),
    name: 'noone',
    color: 'red',
    position: -1
  },
  dice: 1
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setDice: (game, { payload: dice }: PayloadAction<OneToSix>) => {
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

      const currentTurnIndex = players.findIndex(player => player.id === turn.id);
      const nextTurnIndex = (currentTurnIndex + 2 > players.length) ? 0 : currentTurnIndex + 1;

      dispatch(setTurn(players[nextTurnIndex]))
    };

export const { setDice, setTurn } = gameSlice.actions;

export default gameSlice.reducer;

export const selectGame = (state: RootState) => state.game;
export const selectTurn = (state: RootState) => state.game.turn;
export const selectDice = (state: RootState) => state.game.dice;