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
    addTodo: (list, action: PayloadAction<Todo>) => {
      list.push(action.payload);
      // list = [...list, action.payload];
    },
    removeTodo: (list, action: PayloadAction<Todo>) => {
      const toBeDeletedIndex = list.findIndex(i => i.id === action.payload.id);
      if (toBeDeletedIndex < 0) { console.warn('item not found'); return };

      list.splice(toBeDeletedIndex, 1);
    },
    toggleTodo: (list, action: PayloadAction<Todo>) => {
      const itemIndex = list.findIndex(i => i.id === action.payload.id);

      if (itemIndex < 0) { console.warn('item not found'); return };

      list[itemIndex].isDone = !list[itemIndex].isDone;
    }
  }
})

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;