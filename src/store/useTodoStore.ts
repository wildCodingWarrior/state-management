import { create } from "zustand";

interface TodoStore {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  addTodo: (newTodo: Todo) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  setTodos: (todos) => set({ todos }),
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

export const fetchTodos = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=3"
  );
  const todos: Todo[] = await response.json();
  useTodoStore
    .getState()
    .setTodos(todos.map((todo) => ({ ...todo, isDone: false })));
};
