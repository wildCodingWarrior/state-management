import React from "react";
import { styled } from "styled-components";
import { todosAtom } from "../store/atom";
import { useAtom } from "jotai";

const TodoItem = (props) => {
  const { todo } = props;
  const { id, title, content, isDone } = todo;
  const [_, setTodos] = useAtom(todosAtom);

  const deleteTodoItem = (id) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const updateTodoItem = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    });
  };

  return (
    <TodoItemContainer>
      <div>{title}</div>
      <div>{content}</div>
      <div
        onClick={() => {
          updateTodoItem(id);
        }}
      >
        {isDone ? "취소" : "완료"}
      </div>
      <div
        onClick={() => {
          deleteTodoItem(id);
        }}
      >
        삭제
      </div>
    </TodoItemContainer>
  );
};

export default TodoItem;

const TodoItemContainer = styled.div`
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
`;
