import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
  updateTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      }),
    })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));
