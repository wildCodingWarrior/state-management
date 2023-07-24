import React, { useState } from "react";
import { styled } from "styled-components";
import { todosAtom } from "../store/atom";
import { useAtom } from "jotai";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [_, setTodos] = useAtom(todosAtom);

  const handleClick = () => {
    setTodos((prev) => {
      return [...prev, { id: Date.now(), title, content, isDone: false }];
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
