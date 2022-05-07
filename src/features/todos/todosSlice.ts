import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Todo {
  id: number
  title: string
  isDone: boolean
}

const initialState: Todo[] = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (list, action: PayloadAction<Todo>) => {
      // list.push(action.payload);
      list = [...list, action.payload];
    },
    remove: (list, action: PayloadAction<Todo>) => {
      list = list.filter(i => i.id !== action.payload.id);
    },
    toggle: (list, action: PayloadAction<Todo>) => {
      const itemIndex = list.findIndex(i => i.id === action.payload.id);

      if (itemIndex < 0) { console.warn('item not found'); return };

      list[itemIndex].isDone = !list[itemIndex].isDone;
    }
  }
})

export const { add, remove, toggle } = todosSlice.actions;

export const selectCount = (state: RootState) => state.todos;

export default todosSlice.reducer;