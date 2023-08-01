import React, { useState } from "react";
import { styled } from "styled-components";
import { addTodo } from "../redux/modules/todoSlice";
import { useAppDispatch } from "../hooks";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      addTodo({
        id: Date.now(),
        title,
        content,
        isDone: false,
      })
    );
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
