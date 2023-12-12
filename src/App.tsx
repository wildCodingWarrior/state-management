import { styled } from "styled-components";
import Layout from "./shared/Layout";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useEffect } from "react";
import { fetchTodos } from "./store/useTodoStore";

const App = () => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Layout>
      <AppTitle>zustand로 만드는 투두리스트</AppTitle>
      <TodoInput />
      <TodoList />
    </Layout>
  );
};

export default App;

const AppTitle = styled.h1``;
