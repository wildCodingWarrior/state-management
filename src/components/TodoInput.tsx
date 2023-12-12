import React, { useState } from "react";
import { styled } from "styled-components";
import { useTodoStore } from "../store/useTodoStore";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { addTodo } = useTodoStore();

  const handleClick = () => {
    addTodo({
      id: Date.now(),
      title,
      content,
      isDone: false,
    });
  };

  return (
    <TodoInputContainer>
      제목
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      내용
      <input
        type="text"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        추가
      </button>
    </TodoInputContainer>
  );
};

export default TodoInput;

const TodoInputContainer = styled.div``;
