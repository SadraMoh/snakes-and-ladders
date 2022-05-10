import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import todosReducer from '../features/todos/todosSlice';
import mapReducer from '../features/forest/mapSlice';
import playersReducer from '../features/forest/playersSlice';
import gameReducer from '../features/forest/gameSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    map: mapReducer,
    players: playersReducer,
    game: gameReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
