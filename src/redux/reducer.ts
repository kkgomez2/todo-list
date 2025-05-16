import { createSlice } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  item: string;
  completed: boolean;
};

const initialState: Todo[] = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      return state.filter((todo: Todo) => todo.id !== action.payload);
    },
    updateTodos: (state, action) => {
      return state.map((todo: Todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        } else {
          return todo;
        }
      });
    },
    completeTodos: (state, action) => {
      return state.map((todo: Todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        } else {
          return todo;
        }
      });
    },
  },
});

export type { Todo };
export const { addTodos, removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
