import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const name = "todos";

interface StateType {
  todos: Todo[];
}

const TODO_URL = "https://jsonplaceholder.typicode.com/todos";

const __getTodo = createAsyncThunk<Todo[]>(
  `${name}/getTodo`,
  async (_, thunkAPI) => {
    const response = await axios.get(TODO_URL);
    return thunkAPI.fulfillWithValue(response.data) as Todo[];
  }
);

const initialState: StateType = {
  todos: [],
};

export const counterSlice = createSlice({
  name,
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      ) as Todo;
      todo.isDone = !todo.isDone;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(__getTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, updateTodo } = counterSlice.actions;

export default counterSlice.reducer;
